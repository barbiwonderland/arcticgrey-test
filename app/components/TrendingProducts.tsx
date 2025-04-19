import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Card from './Card';
import {Suspense, useRef} from 'react';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductProvider} from '@shopify/hydrogen-react';
import {Await} from '@remix-run/react';

function TrendingProducts({products}: {products: Promise<Product[]>}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({left: 400, behavior: 'smooth'});
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({left: -400, behavior: 'smooth'});
    }
  };
  // console.log(products, 'products from trending page');

  return (
    <div className="trending-section h-auto w-screen max-h-[950px] bg-[#F6F6F5] md:p-10">
      <div className="titles flex flex-row justify-center text-center">
        <div
          className="left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
          onClick={handleScrollLeft}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="text font-main text-[16px]">
          <div className="Trending ">🌟 Trending</div>
          <h1 className="text-[40px] font-medium">Supplements</h1>
          <div className="underline">View all</div>
        </div>
        <div
          className="right-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
          onClick={handleScrollRight}
        >
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="carousel w-full py-7">
        <div
          className="cards md:w-full w-[80%]  mt-5 flex justify-normal md:justify-center md:gap-8 items-center flex-row flex-nowrap overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mx-auto md:mx-0"
          ref={scrollRef}
        >
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <Await resolve={products}>
            {(response) =>
              response.map((product, key) => {
                return (
                  <ProductProvider data={product} key={key}>
                    <Card price={true} />
                  </ProductProvider>
                );
              })
            }
          </Await>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
