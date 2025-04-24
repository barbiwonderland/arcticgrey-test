import {BsStarFill} from 'react-icons/bs';
import {useAside} from './Aside';
import PurchaseButtons from '../Product/PurchaseButtons';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {AddToCartButton, useProduct} from '@shopify/hydrogen-react';

function ProductCard(price: {price: boolean}) {
  const {product, variants, setSelectedVariant} = useProduct();
  // console.log("variant",product?.options?.[0]?.optionValues?.[0]?.firstSelectableVariant?.id)
  return (
    <div
      className={`group card w-[80%]! shrink-0 md:shrink-1 md:w-[365px] h-[350px] md:h-[560px] m-2 p-5 md:pd-0 bg-white rounded-lg font-main flex flex-col justify-center mx-auto `}
    >
      {/* its appears on the image */}
      {/* {true && (
       <div className=" bg-[#FFED92] py-1.5 px-2.5 w-fit stamp text-[12px] ml-2 mt-2">
         BestSeller
       </div>
     )} */}
      <img
        className={`group-hover:scale-105 transition-all duration-200 ease-in-out w-[200px] md:w-[300px] mb-1.5 mx-auto `}
        src={product?.images?.nodes?.[0]?.url}
        alt={product?.title}
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
          {product?.title}
        </div>
        <div className="subtitle text-gray-500 md:text-[16px] text-[10px]">
          {product?.description}
        </div>
        <div className="bottom-section flex flex-row justify-between mt-2 gap-1.5 md:gap-0">
          <div className="score flex flex-row items-center ">
            {[...Array(5)].map((_, index) => (
              <BsStarFill key={index} className="md:w-2.5 w-2 md:h-2.5  " />
            ))}
          </div>
          <AddToCartButton
            variantId={
              product?.options?.[0]?.optionValues?.[0]?.firstSelectableVariant
                ?.id
            }
            quantity={1}
            accessibleAddingToCartLabel="Adding item to your cart"
          >
            <div
              className="add-button p-1  md:p-1.5 md:w-28 w-18 bg-black rounded-lg text-white font-main md:text-xs text-[9px] text-center"
              onClick={() => open('product-detail')}
            >
              {price
                ? ` Add • $${product?.options?.[0]?.optionValues?.[0]?.firstSelectableVariant?.price?.amount || '0'}`
                : 'Add to Cart'}
            </div>
          </AddToCartButton>
        </div>
      </div>

      {/* hidden section, visible on hover */}

      <PurchaseButtons
        active={false}
        item={product}
        index={Number(product?.id)}
        price={true}
        quantityButton={false}
      />
    </div>
  );
}

export default ProductCard;
