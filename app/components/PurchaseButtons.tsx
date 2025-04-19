import {useState} from 'react';
import {useAside} from './Aside';
import { Product } from '@shopify/hydrogen/storefront-api-types';

function PurchaseButtons({
  item,
  index,
  price,
  active,
  quantityButton,
}: {
  item?: Product;
  index?: number;
  price?: boolean;
  active: boolean;
  quantityButton: boolean;
}) {
  const [selectedOption, setSelectedOption] = useState('one');
  const {open} = useAside();
  return (
    <div
      className={`${active ? 'flex' : 'hidden'} font-main group-hover:flex flex-col items-center w-full group-hover:visible transition-all duration-200 ease-in-out`}
    >
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
          <div className="price font-medium pl-6">55</div>
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
      <div
        className={`add-btn w-[90%] h-[65px] bg-black text-white text-[14px] rounded-lg flex content-center flex-wrap mb-2 ${quantityButton ? 'justify-around' : 'justify-center'}`}
        onClick={() => open('product-detail')}
      >
        {quantityButton && (
          <div className="quantity-button bg-white w-[140px] h-[53px] font-main text-[18px] rounded-xl flex flex-row text-black justify-center gap-9 font-light items-center">
            <div className="decrease ">-</div>
            <div>1</div>
            <div className="increase">+</div>
          </div>
        )}

        <span className="flex items-center font-normal text-[16px]">
          {' '}
          Add to Cart - $55
        </span>
        <div className=""></div>
      </div>
      <div className="full-details text-xs">View Full Details</div>
    </div>
  );
}

export default PurchaseButtons;
