import {AddToCartButton, useProduct} from '@shopify/hydrogen-react';
import {Product} from '@shopify/hydrogen-react/storefront-api-types';

function CartRecomendations() {
  const {product, variants, setSelectedVariant} = useProduct();

  return (
    <div
      className={`group card bg-[#F6F6F5] rounded-lg font-main flex flex-col justify-center mx-auto w-[220px] h-[270px] p-2.5 `}
    >
      {/* its appears on the image */}
      {/* {true && (
     <div className=" bg-[#FFED92] py-1.5 px-2.5 w-fit stamp text-[12px] ml-2 mt-2">
       BestSeller
     </div>
   )} */}
      <img
        className={`w-[180px] h-[180px] mb-1.5 mx-auto object-contain `}
        src={product?.images?.nodes?.[0]?.url}
        alt={product?.title}
      />
      <div
        className={`text visible w-[80%] md:w-[90%] flex flex-col flex-wrap self-center `}
      >
        <div className="title font-medium  text-[12px] ">{product?.title}</div>

        <div className="bottom-section flex flex-row justify-between mt-2 gap-1.5 md:gap-0 items-center">
          <div className="unitPrice text-[14px] font-main">
            $
            {product?.options?.[0]?.optionValues?.[0]?.firstSelectableVariant
              ?.price?.amount || '0'}
          </div>
          <AddToCartButton
            variantId={
              product?.options?.[0]?.optionValues?.[0]?.firstSelectableVariant
                ?.id
            }
            quantity={1}
            accessibleAddingToCartLabel="Adding item to your cart"
          >
            <div className="add-button p-1  md:p-1.5 md:w-28 w-18 bg-black rounded-lg text-white font-main md:text-xs text-[9px] text-center">
              Add to Cart <span className="ml-1"> +</span>
            </div>
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}

export default CartRecomendations;
