import {Product} from '@shopify/hydrogen/storefront-api-types';
import {VariantItemType} from './ProductDetails';
import {useEffect, useState} from 'react';
import {
  AddToCartButton,
  ProductProvider,
  useCart,
} from '@shopify/hydrogen-react';
import {
  CartLineProvider,
  CartLineQuantityAdjustButton,
} from '@shopify/hydrogen-react';

export const VariantItem = ({
  itemLine,
  optionValue,
  product,
}: {
  optionValue: VariantItemType;
  product: Product;
  itemLine: any;
}) => {
  const productVariant = optionValue.firstSelectableVariant?.id;

  const [quantity, setQuantity] = useState(itemLine?.quantity ?? 0);
  const [disccount, setDiscount] = useState(0);

  //update disccount value
  const updateDiscount = () => {
    if (itemLine) {
      if (itemLine?.quantity >= 15) {
        setDiscount(15);
      } else if (itemLine.quantity >= 10) {
        setDiscount(10);
      } else if (itemLine.quantity >= 5) {
        setDiscount(5);
      }
    } else {
      setDiscount(0);
    }
  };

  //update of variant individual quantities
  useEffect(() => {
    let newQuantity;
    if (itemLine?.quantity) {
      newQuantity = itemLine.quantity;
    } else {
      newQuantity = 0;
    }
    setQuantity(newQuantity);
    updateDiscount();
  }, [itemLine?.quantity]);

  let unitPrice =
    disccount > 0
      ? (
          parseFloat(optionValue.firstSelectableVariant?.price.amount || '0') *
          quantity *
          (1 - disccount / 100)
        ).toFixed(2)
      : (
          parseFloat(optionValue.firstSelectableVariant?.price.amount || '0') *
          quantity
        ).toFixed(2);
        
  return (
    <tr key={optionValue.id} className="align-top text-center">
      <td className="lg:p-3 py-2">
        <div className="flex items-center gap-3 text-[10px] text-[#1B1F23] text-left">
          <div className="md:w-[44px] md:h-[44px] w-[25px] h-[25px] border-gray-300 border-1 rounded-xl flex justify-center">
            <img
              src={optionValue.firstSelectableVariant?.image?.url}
              alt={optionValue.name}
              className="object-contain w-[60%] h-auto"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{optionValue.name}</span>
            <span>
              {optionValue.firstSelectableVariant?.metafield?.value || ''}
            </span>
          </div>
        </div>
      </td>
      <td className="lg:p-3 py-2 flex gap-1.5">
        {/* subtraction logic */}

        {itemLine ? (
          /**If item line exist remove if its 0 decrease its >1*/
          <CartLineProvider line={itemLine}>
            <CartLineQuantityAdjustButton
              adjust={itemLine.quantity > 1 ? 'decrease' : 'remove'}
            >
              <div className="px-2 py-1 hover:bg-gray-300 text-xs flex items-center gap-2 border-1 border-gray-200 rounded-xs text-[#1B1F23] text-[10px] font-main justify-center text-center">
                -
              </div>
            </CartLineQuantityAdjustButton>
          </CartLineProvider>
        ) : (
          /**show only a disable minus */
          <div className="px-2 py-1 hover:bg-gray-300 text-xs flex items-center gap-2 border-1 border-gray-200 rounded-xs text-[#1B1F23] text-[10px] font-main justify-center text-center">
            -
          </div>
        )}

        <span className='text-xs my-auto'>{quantity}</span>

        {/**Sum render logic */}
        {/**If the product variants is in the cart as a line */}
        {itemLine ? (
          <CartLineProvider line={itemLine}>
            <CartLineQuantityAdjustButton adjust="increase">
              <div className="px-2 py-1 hover:bg-gray-300 text-xs flex items-center gap-2 border-1 border-gray-200 rounded-xs text-[#1B1F23] text-[10px] font-main justify-center text-center">
                +
              </div>
            </CartLineQuantityAdjustButton>
          </CartLineProvider>
        ) : (
          /**else if not add the new line passing variant id */
          <ProductProvider data={product}>
            <AddToCartButton variantId={productVariant}>
              <div className="px-2 py-1 hover:bg-gray-300 text-xs flex items-center gap-2 border-1 border-gray-200 rounded-xs text-[#1B1F23] text-[10px] font-main justify-center text-center">
                +
              </div>
            </AddToCartButton>
          </ProductProvider>
        )}
      </td>
      <td>
        <div className="font-main lg:text-[12px] text-[10px] lg:p-2 py-2">
          ${optionValue.firstSelectableVariant?.price.amount} / Each
        </div>
      </td>
      <td className="lg:p-3 py-2">
        <div className="discount font-main lg:text-[12px] text-[10px]">
          {disccount}%
        </div>
      </td>
      <td className="lg:p-3 py-2">
        <div className="unit-total font-main lg:text-[12px] text-[10px] text-right">
          {unitPrice}
        </div>
      </td>
    </tr>
  );
};
