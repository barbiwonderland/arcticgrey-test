import {AiOutlineInfoCircle} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import img from '../assets/images/products/product1.png';
import PurchaseButtons from './PurchaseButtons';
function ProductDetails() {
  const products = [
    {
      id: 1,
      name: 'Small',
      capsules: '30 Capsules',
      quantity: 0,
      price: 49.95,
      discount: '0%',
      total: '$0.00',
    },
    {
      id: 2,
      name: 'Medium',
      capsules: '60 Capsules',
      quantity: 7,
      price: 49.95,
      discount: '5%',
      total: '$249.95',
    },
    {
      id: 3,
      name: 'Large',
      capsules: '90 Capsules',
      quantity: 8,
      price: 49.95,
      discount: '5%',
      total: '$249.95',
    },
  ];

  return (
    <div className="product-detail container flex flex-col w-auto  h-auto">
      <img
        src={img}
        className=" h[300px] w-[300px] object-cover flex justify-center align-center flex-wrap"
        alt=""
      />
      <div className="text flex flex-col font-main">
        <div className="title font-medium text-[26px]">
          Magnesium L-Threonate
        </div>
        <div className="subtitle text-xs text-gray-400">
          Enhances the quality of sleep.
        </div>
        <div className="tags flex flex-row justify-between mt-5">
          <div className="metafields flex flex-row gap-3 ">
            <div className="metafield bg-[#F6F6F5] px-3.5 py-1.5 w-[94px] h-[27px] text-[12px] rounded-xs text-center ">
              GMO Free
            </div>
            <div className="metafield bg-[#F6F6F5] px-3.5 py-1.5 w-[94px] h-[27px] text-[12px] rounded-xs text-center  ">
              Gluten Free
            </div>
          </div>
          <div className="reviews flex flex-row ">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
            <AiFillStar />
          </div>
        </div>
      </div>

      <div className="w-auto mx-auto p-4">
        <div className="flex justify-between font-bold border-b-2 border-gray-300 pb-2 mb-2 text-sm">
          <div>Variant</div>
          <div className="flex flex-row">
            Quantity{' '}
            <span>
              <AiOutlineInfoCircle color="gray" />
            </span>{' '}
          </div>
          <div>Price</div>
          <div>Discount</div>
          <div>Total</div>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center py-4 text-sm"
          >
            <div className=" flex items-center gap-3">
              <img src={img} alt={product.name} className="w-12 h-auto" />
              <div>
                {product.name}
                <br />
                <span className="text-gray-500 text-xs">
                  {product.capsules}
                </span>
              </div>
            </div>

            <div className=" flex items-center gap-2">
              <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">
                -
              </button>
              <span>{product.quantity}</span>
              <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">
                +
              </button>
            </div>

            <div>${product.price.toFixed(2)} / Each</div>

            <div className="discount">{product.discount}</div>

            <div className="unit-total">
              <div className="w-1/6">
                {(product.price * product.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
        <div className="total flex flex-row flex-wrap justify-between text-[10px] content-center items-center border-t-2 border-gray-300 mb-1.5 ">
          <div className="button-cart w-[77px] h-[25px] border-1  border-gray-300 rounded-xl flex justify-center items-center font-medium">
            View Cart
          </div>
          <div className="total-items flex flex-col">
            <span>20</span>
            Total Items
          </div>
          <div className="subtotal text-end text-[10px] max-w-[140px] break-words whitespace-normal ">
            <div className="price font-medium text-[14px] ">$249.95</div>
            <div className="">Product Subtotal</div>
            <div className="">Taxes & shipping calculated at checkout</div>
          </div>
        </div>
      </div>
      <PurchaseButtons active={true} price={false} />
    </div>
  );
}

export default ProductDetails;
