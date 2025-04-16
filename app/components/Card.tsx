import {BsStarFill} from 'react-icons/bs';
import {SimpleProduct} from '~/types/product-types';
import {useAside} from './Aside';
import PurchaseButtons from './PurchaseButtons';

function Card({
  item,
  index,
  price,
}: {
  item: SimpleProduct;
  index: number;
  price: boolean;
}) {
  const {open} = useAside();
  return (
    <>
      <div
        key={index}
        className={`group card w-[80%]! shrink-0 md:shrink-1 md:w-[365px] h-[350px] md:h-[560px] m-2 p-5 md:pd-0 bg-white rounded-lg font-main flex flex-col justify-center `}
      >
        {/* its appears on the image */}
        {/* {true && (
              <div className=" bg-[#FFED92] py-1.5 px-2.5 w-fit stamp text-[12px] ml-2 mt-2">
                BestSeller
              </div>
            )} */}
        <img
          className={`group-hover:scale-105 transition-all duration-200 ease-in-out w-[200px] md:w-[300px] mb-1.5 mx-auto `}
          src={item.images.nodes[0].url}
          alt={item.title}
        />
        <div
          className={`text visible w-[80%] md:w-[90%] flex flex-col flex-wrap self-center group-hover:hidden transition-all duration-200 ease-in-out`}
        >
          <div className="tags mb-4  ">
            <span className="bg-[#F6F6F5] md:text-[14px] text-[10px] p-0.5 md:p-2.5 w-fit mr-4">
              • GMO Free
            </span>
            <span className="bg-[#F6F6F5] md:text-[14px] text-[10px] p-0.5 md:p-2.5 w-fit mr-4">
              • GMO Free
            </span>
          </div>
          <div className="title font-medium md:text-[16px] text-[12px] ">
            {item.title}
          </div>
          <div className="subtitle text-gray-500 md:text-[16px] text-[10px]">
            {item.description}
          </div>
          <div className="bottom-section flex flex-row justify-between mt-2 gap-1.5 md:gap-0">
            <div className="score flex flex-row items-center ">
              {[...Array(5)].map((_, index) => (
                <BsStarFill key={index} className="md:w-2.5 w-2 md:h-2.5  " />
              ))}
            </div>
            <div
              className="add-button p-1  md:p-1.5 md:w-28 w-18 bg-black rounded-lg text-white font-main md:text-xs text-[9px] text-center"
              onClick={() => open('product-detail')}
            >
              {price
                ? ` Add • ${item.variants.nodes[0].price.amount}`
                : 'Add to Cart'}
            </div>
          </div>
        </div>

        {/* hidden section, visible on hover */}

        <PurchaseButtons active={false} item={item} index={index} price={price}/>
      </div>
    </>
  );
}

export default Card;
