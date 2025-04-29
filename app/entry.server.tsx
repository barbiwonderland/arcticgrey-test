import type {EntryContext, AppLoadContext} from '@shopify/remix-oxygen';
import {RemixServer} from '@remix-run/react';
import {isbot} from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  context: AppLoadContext,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    shop: {
      checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
      storeDomain: context.env.PUBLIC_STORE_DOMAIN,
    },
  });

  const connectSrcExtension = ' https://arctic-greytest.myshopify.com';
  let extendedHeader = header.replace(
    /(connect-src [^;]+)/,
    (match) => `${match}${connectSrcExtension}`,
  );

  // Aquí agregas ambos dominios permitidos en media-src
  const mediaSrcExtension =
    "; media-src 'self' https://arctic-greytest.myshopify.com https://cdn.shopify.com";

  if (/media-src\s/.test(header)) {
    extendedHeader = extendedHeader.replace(
      /(media-src [^;]+)/,
      (match) => `${match} https://cdn.shopify.com`,
    );
  } else {
    extendedHeader += mediaSrcExtension;
  }

  extendedHeader += "; font-src 'self' data:;";

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} nonce={nonce} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', extendedHeader);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
