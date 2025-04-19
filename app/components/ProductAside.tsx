import ProductDetails from './ProductDetails';
import {Aside, useAside} from './Aside';
import { PageLayoutProps } from './PageLayout';
import { Suspense } from 'react';
import { Await } from '@remix-run/react';

function ProductAside({cart}: {cart: PageLayoutProps['cart']}) {
  const {type, close} = useAside();
  if (type !== 'product-detail') return null;

  return (
    <Aside type="product-detail" heading="" width={540}>
       <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <ProductDetails cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

export default ProductAside;
