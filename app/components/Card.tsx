import {useState} from 'react';
import product from '../assets/images/products/product1.png';
import {BsStarFill} from 'react-icons/bs';

export type SimpleProduct = {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    nodes: {
      id: string;
      url: string;
      altText: string | null;
      width: number;
      height: number;
    }[];
  };
  variants: {
    nodes: {
      price: {
        amount: string;
      };
    }[];
  };
};

function Card({item,index,price}: {item: SimpleProduct,index:number,price:boolean}) {
  const [selectedOption, setSelectedOption] = useState('one');

  return (
    < >

      <div key={index} className={`group card w-[80%]! shrink-0 md:shrink-1 md:w-[365px] h-[350px] md:h-[560px] m-2 p-5 md:pd-0 bg-white rounded-lg font-main flex flex-col justify-center `}>
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
      <div className={`text visible w-[80%] md:w-[90%] flex flex-col flex-wrap self-center group-hover:hidden transition-all duration-200 ease-in-out`}>
        <div className="tags mb-4  ">
          <span className="bg-[#F6F6F5] md:text-[14px] text-[10px] p-0.5 md:p-2.5 w-fit mr-4">
            • GMO Free
          </span>
            <span className="bg-[#F6F6F5] md:text-[14px] text-[10px] p-0.5 md:p-2.5 w-fit mr-4">
            • GMO Free
          </span>
        </div>
        <div className="title font-medium md:text-[16px] text-[12px] ">{item.title}</div>
        <div className="subtitle text-gray-500 md:text-[16px] text-[10px]">{item.description}</div>
        <div className="bottom-section flex flex-row justify-between mt-2 gap-1.5 md:gap-0">
          <div className="score flex flex-row items-center ">
            {[...Array(5)].map((_, index) => (
              <BsStarFill key={index} className='md:w-2.5 w-2 md:h-2.5  '/>
            ))}
          </div>
          <div className="add-button p-1  md:p-1.5 md:w-28 w-18 bg-black rounded-lg text-white font-main md:text-xs text-[9px] text-center">
            {price ? ` Add • ${item.variants.nodes[0].price.amount}` : "Add to Cart"}
          </div>
        </div>
      </div>

      {/* hidden section, visible on hover */}

      <div className={`hidden font-main group-hover:flex flex-col items-center w-full group-hover:visible transition-all duration-200 ease-in-out`} >
        <div className="options flex flex-row gap-2 mb-5">
          {/* One-Time Purchase */}
          <label
            className={`w-[157px] h-[70px] text-xs p-2 rounded-md cursor-pointer border flex flex-col justify-center gap-1 relative
                          ${selectedOption === 'one' ? 'bg-white border-black' : 'bg-[#F6F6F5] border-gray-300'}
                        `}
          >
            <div className="flex items-center gap-2">
              <span className="w-4 h-4  border-2 rounded-full flex items-center justify-center">
                {selectedOption === 'one' && (
                  <span className="w-2 h-2 bg-black rounded-full block" />
                )}
              </span>
              <span>One-Time Purchase</span>
            </div>
            <div className="price font-medium pl-6">{item.variants.nodes[0].price.amount}</div>
            <input
              type="radio"
              name="purchaseOption"
              value="one"
              className="hidden"
              checked={selectedOption === 'one'}
              onChange={() => setSelectedOption('one')}
            />
          </label>

          {/* Subscribe & Save */}
          <label
            className={`w-[157px] h-[70px] text-xs p-2 rounded-md cursor-pointer border flex flex-col justify-center gap-1 relative
                          ${selectedOption === 'subscribe' ? 'bg-white border-black' : 'bg-[#F6F6F5] border-gray-300'}
                        `}
          >
            <div className="flex items-center gap-2">
              <span className="w-4 h-4  border-2 rounded-full flex items-center justify-center">
                {selectedOption === 'subscribe' && (
                  <span className="w-2 h-2 bg-black rounded-full block" />
                )}
              </span>
              <span>Subscribe & Save</span>
            </div>
            <div className="price font-medium pl-6">
              $39.96 <span className="text-[#802608]">Save 10%</span>
            </div>
            <input
              type="radio"
              name="purchaseOption"
              value="subscribe"
              className="hidden"
              checked={selectedOption === 'subscribe'}
              onChange={() => setSelectedOption('subscribe')}
            />
          </label>
        </div>
        <div className="add-btn w-[325px] h-[45px] bg-black round-lg text-white text-[14px] rounded-lg flex content-center flex-wrap justify-center mb-2">
          Add to Cart - <span className="price">${item.variants.nodes[0].price.amount}</span>
        </div>
        <div className="full-details text-xs">View Full Details</div>
      </div>
    </div>
    </>
  
  );
}

export default Card;
