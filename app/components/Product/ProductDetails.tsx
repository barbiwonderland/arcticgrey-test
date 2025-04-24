import {AiOutlineInfoCircle} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import img from '../../assets/images/products/product1.png';

import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {
  CartForm,
  OptimisticCartLine,
  useOptimisticCart,
} from '@shopify/hydrogen';
import {CartMainProps} from '../Cart/CartMain';
import Tooltip from './Tooltip';
import PurchaseButtons from './PurchaseButtons';

type CartLine = OptimisticCartLine<CartApiQueryFragment>;

function ProductDetails({
  layout,
  cart: originalCart,
}: {
  layout: string;
  cart: any;
}) {
  const cart = useOptimisticCart(originalCart);
  const products = [
    {
      id: 1,
      name: 'Small',
      capsules: '30 Capsules',
      quantity: 0,
      price: 49.95,
      discount: '0%',
      total: '$0.00',
      stock: '10',
    },
    {
      id: 2,
      name: 'Medium',
      capsules: '60 Capsules',
      quantity: 7,
      price: 49.95,
      discount: '5%',
      total: '$249.95',
      stock: '10',
    },
    {
      id: 3,
      name: 'Large',
      capsules: '90 Capsules',
      quantity: 8,
      price: 49.95,
      discount: '5%',
      total: '$249.95',
      stock: '10',
    },
  ];

  return (
    <div className="product-detail container flex flex-col w-auto  h-full font-main justify-around  py-9">
      <img
        src={img}
        className=" w-[150px] h-[150px] md:h-[250px] md:w-[250px] object-cover flex self-center align-center flex-wrap"
        alt=""
      />
      <div className="text flex flex-col font-main h-auto">
        <div className="title font-medium text-[18px] md:text-[26px]">
          Omega-3
        </div>
        <div className="subtitle text-xs text-gray-400">
          Enhances the quality of sleep.
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
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
            <AiFillStar />
          </div>
        </div>
      </div>

      <table className="table-auto h-[210px] mb-1   ">
        <thead>
          <tr className="font-bold  pb-2 mb-2 text-[12px] ">
            {' '}
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
        <tbody className="border-y border-slate-300">
          {products.map((product) => (
            <tr key={product.id} className="align-top text-center  ">
              <td className="p-3">
                <div className=" flex items-center gap-3 text-[10px] text-[#1B1F23] text-left">
                  <div className="md:w-[44px] md:h-[44px] w-[25px] h-[25px] border-gray-300 border-1 rounded-xl flex justify-center">
                    <img
                      src={img}
                      alt={product.name}
                      className="object-contain w-[60%] h-auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className=" font-semibold">{product.name}</span>

                    <span>{product.capsules}</span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                {/*  
                funcionality to update quantities of variant in cart, i have to get the select variant first to use it , now is working with a default variant that have to be in the cart
                i comment the line to avoid errors.     
                */}
                {/* <CartForm
                  route="/cart"
                  action={CartForm.ACTIONS.LinesUpdate}
                  inputs={{
                    lines: [
                      {
                        id: "gid://shopify/ProductVariant/51150405042490",
                        quantity: 0,
                      },

                    ],
                    other: 'data',
                  }}
                >  */}
                <div className=" flex items-center gap-2 border-1 border-gray-200 rounded-xs text-[#1B1F23] text-[10px] font-main justify-center text-center">
                  <button className=" px-2 py-1 rounded hover:bg-gray-300 text-xs">
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button className=" px-2 py-1 rounded hover:bg-gray-300 text-xs">
                    +
                  </button>
                </div>
                {/* </CartForm>  */}
              </td>
              <td>
                <div className="font-main text-[12px] p-2">
                  ${product.price.toFixed(2)} / Each
                </div>
              </td>
              <td className="p-3">
                {' '}
                <div className="discount font-main text-[12px]">
                  {product.discount}
                </div>
              </td>
              <td className="p-3">
                <div className="unit-total font-main text-[12px] text-right">
                  <div className="">
                    {(
                      product.price * product.quantity -
                      (product.price * product.quantity * 5) / 100
                    ).toFixed(2)}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="button-cart w-[77px] h-[25px] rounded-xl border-gray-200 font-medium text-xs text-[#1B1F23] border-1 flex justify-center content-center flex-wrap">
          View Cart
        </div>
        <div className="total-items flex flex-col text-[10px]">
          <div className="total">20</div>
          <span>Total Items</span>
        </div>
        <div className="subtotal flex flex-col text-[10px] text-end">
          <div className="price tex-[14px] font-medium">$249.95</div>
          <span>Product Subtotal</span>
          <span>Taxes & shipping calculated at checkout</span>
        </div>
      </div>
      <PurchaseButtons active={true} price={false} quantityButton={true} />
    </div>
  );
}

export default ProductDetails;
