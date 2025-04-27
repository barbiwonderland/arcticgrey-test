import {AiOutlineInfoCircle} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import img from '../../assets/images/products/product1.png';
import {
  AddToCartButton,
  CartCost,
  CartLineProvider,
  CartLineQuantityAdjustButton,
  ProductProvider,
  useCart,
} from '@shopify/hydrogen-react';

import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {OptimisticCartLine, useOptimisticCart} from '@shopify/hydrogen';
import Tooltip from '../Tooltip';
import PurchaseButtons from '../PurchaseButtons';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {useState} from 'react';
import {VariantItem} from './VariantItem';

export interface VariantItemType {
  name: string;
  id: string;
  firstSelectableVariant?: {
    availableForSale?: boolean;
    compareAtPrice?: string;
    id: string;
    image: {
      __typename: string;
      id: string;
      url: string;
      altText: string | null;
      width: number;
      height: number;
    } | null;
    price: {
      amount: string;
      currencyCode: string;
    };
    product: {
      title: string;
      handle: string;
    };
    selectedOptions: {
      name: string;
      value: string;
    }[];
    sku: string;
    title: string;
    unitPrice: string | null;
    metafield: {
      value: string;
      key: string;
    } | null;
  };
  swatch: any;
}

function ProductDetails({product, layout}: {product: Product; layout: string}) {
  const {totalQuantity, lines} = useCart();

  let itemLine;

  //filtering variants that are in the cart as line
  const cartVariants = lines
    ?.map((line) => {
      const matchingVariant = product.options[0].optionValues?.find(
        (variant) =>
          variant?.firstSelectableVariant?.id === line?.merchandise?.id,
      );

      if (matchingVariant) {
        //if match return object
        return {
          id: line?.merchandise?.id,
          quantity: line?.quantity,
          price: line?.merchandise?.price?.amount,
        };
      }
      //if not match return null
      return null;
    })
    .filter((item) => item !== null); // filter nulls values

  //sum of quantities and calculate totals
  const summaryCartVariants =
    cartVariants &&
    cartVariants.reduce(
      (acc, item) => {
        acc.totalProductQuantity += item?.quantity ?? 0;
        acc.totalPrice +=
          (item?.quantity ?? 0) * parseFloat(item?.price || '0');
        return acc;
      },
      {totalProductQuantity: 0, totalPrice: 0},
    );

  // console.log(result_reduce, 'reduce');

  if (!product) return <h1>Oops, error loading product</h1>;
  return (
    <div className="product-detail container flex flex-col w-auto h-auto  lg:h-full font-main justify-around  py-9 ">
      <img
        src={product.images.nodes[0].url}
        className=" w-[150px] h-[150px] md:h-[250px] md:w-[250px] object-cover flex self-center align-center flex-wrap"
        alt=""
      />
      <div className="text flex flex-col font-main h-auto">
        <div className="title font-medium text-[18px] md:text-[26px]">
          {product.title}
        </div>
        <div className="subtitle text-xs text-gray-400">
          {product.description}
        </div>
        <div className="tags flex flex-row justify-between mt-1 mb-1">
          <div className="metafields flex flex-row gap-3 ">
            <div className="metafield bg-[#F6F6F5] px-3.5 md:py-1.5 py-0.5 md:w-[94px] md:h-[27px] w-auto h-auto text-[12px] rounded-xs text-center ">
              GMO Free
            </div>
            <div className="metafield bg-[#F6F6F5] px-3.5 md:py-1.5 py-0.5 md:w-[94px] md:h-[27px] w-auto h-auto text-[12px] rounded-xs text-center ">
              GMO Free
            </div>
          </div>
          <div className="reviews flex flex-row ">
            {Array.from({length: 5}).map((_, index) => (
              <AiFillStar key={index} />
            ))}
          </div>
        </div>
      </div>

      <table className="table-auto h-[210px] mb-1   ">
        <thead>
          <tr className="font-bold  pb-2 mb-2 text-[12px] ">
            <th className="text-left p-4">Variant</th>
            <th className="text-center p-4">
              <div className="flex flex-row relative group justify-center">
                Quantity <AiOutlineInfoCircle color="gray" />
                <Tooltip />
              </div>
            </th>
            <th className="text-center p-4">Price</th>
            <th className="text-center p-4">Discount</th>
            <th className="text-right p-4">Total</th>
          </tr>
        </thead>
        <tbody className="border-y border-slate-300 overflow-y-auto">
          {product.options[0].optionValues.map((optionValue, index) => {
            const productVariantId = optionValue.firstSelectableVariant?.id;
            // console.log(optionValue, 'info of variants');
            //it is not conditional on render only data for updates quantities inside component
            itemLine = lines?.find(
              (line) => line?.merchandise?.id === productVariantId,
            );
            // console.log(productVariantId, 'variants it');

            return (
              <VariantItem
                key={index}
                optionValue={optionValue as VariantItemType}
                product={product}
                itemLine={itemLine}
              />
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="button-cart w-[77px] h-[25px] rounded-xl border-gray-200 font-medium text-xs text-[#1B1F23] border-1 flex justify-center content-center flex-wrap">
          View Cart
        </div>
        <div className="total-items flex flex-col text-[10px]">
          <div className="total">{totalQuantity}</div>
          <span>Total Items</span>
        </div>
        <div className="subtotal flex flex-col text-[10px] text-end">
          <div className="price tex-[14px] font-medium">
            <CartCost amountType="subtotal" />
          </div>
          <span>Product Subtotal</span>
          <span>Taxes & shipping calculated at checkout</span>
        </div>
      </div>
      <PurchaseButtons
        productTotal={summaryCartVariants?.totalPrice}
        productQuantity={summaryCartVariants?.totalProductQuantity}
        active={true}
        price={false}
        quantityButton={true}
        itemLine={itemLine}
      />
    </div>
  );
}

export default ProductDetails;
