import type {
  CartLineUpdateInput,
  ComponentizableCartLine,
} from '@shopify/hydrogen/storefront-api-types';
import {CartForm, Image, type OptimisticCartLine} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {Link} from '@remix-run/react';
import {ProductPrice} from '../Product/ProductPrice';
import {useAside} from '../Common/Aside';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {CartLayout} from './CartMain';
import {IoReloadOutline} from 'react-icons/io5';
import {
  CartLineProvider,
  CartLineQuantityAdjustButton,
} from '@shopify/hydrogen-react';

type CartLine = OptimisticCartLine<CartApiQueryFragment>;

/**
 * A single line item in the cart. It displays the product image, title, price.
 * It also provides controls to update the quantity or remove the line item.
 */
export function CartLineItem({
  layout,
  line,
}: {
  layout: CartLayout;
  line: CartLine | ComponentizableCartLine;
}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  const {close} = useAside();

  console.log(line, 'line desde cartlineitem');

  return (
    <li
      key={id}
      className="cart-line bg-white rounded-xl flex w-full text-[#1B1F23] my-3  "
    >
      {image && (
        <Image
          alt={title}
          aspectRatio="1/1"
          data={image}
          height={80}
          loading="lazy"
          width={80}
        />
      )}

      <div className="mx-2 product-detail-cart flex flex-col items-between justify-center w-full gap-2 ">
        <div className="totals w-full justify-between flex">
          <strong className="text-[15px]">{product.title}</strong>
          <strong>{line?.cost?.totalAmount.amount}</strong>
        </div>
        <div className="flex justify-between items-center  ">
          <CartLineQuantity line={line} />
          <div className="suscribe border-1 flex gap-1.5 items-center   border-gray-400 border-dashed py-1 px-3">
            <IoReloadOutline color="#1B1F23" /> Suscribe & Save 10%
          </div>
        </div>
      </div>
    </li>
  );
}

/**
 * Provides the controls to update the quantity of a line item in the cart.
 * These controls are disabled when the line item is new, and the server
 * hasn't yet responded that it was successfully added to the cart.
 */
function CartLineQuantity({line}: {line: CartLine}) {
  return (
    <div className="cart-line-quantity rounded-sm text-gray-400 px-2  gap-1.5 border-gray-400 w-auto h-auto inline-flex py-1.5  items-center border-1">
      {line && (
        <CartLineProvider line={line}>
          <CartLineQuantityAdjustButton
            adjust={line.quantity > 1 ? 'decrease' : 'remove'}
          >
            <div className="px-2 py-1 hover:bg-gray-300 text-xs flex items-center gap-2 border-1 border-gray-200 rounded-xs text-[#1B1F23] text-[10px] font-main justify-center text-center">
              -
            </div>
          </CartLineQuantityAdjustButton>
        </CartLineProvider>
      )}

      <small className="font-bold!"> {line.quantity} &nbsp;&nbsp;</small>
   {line && 
          <CartLineProvider line={line}>
            <CartLineQuantityAdjustButton adjust="increase">
              <div className="px-2 py-1 hover:bg-gray-300 text-xs flex items-center gap-2 border-1 border-gray-200 rounded-xs text-[#1B1F23] text-[10px] font-main justify-center text-center">
                +
              </div>
            </CartLineQuantityAdjustButton>
          </CartLineProvider>
}

    </div>
  );
}

/**
 * A button that removes a line item from the cart. It is disabled
 * when the line item is new, and the server hasn't yet responded
 * that it was successfully added to the cart.
 */
function CartLineRemoveButton({
  lineIds,
  disabled,
}: {
  lineIds: string[];
  disabled: boolean;
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <button disabled={disabled} type="submit">
        Remove
      </button>
    </CartForm>
  );
}

function CartLineUpdateButton({
  children,
  lines,
}: {
  children: React.ReactNode;
  lines: CartLineUpdateInput[];
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}
