import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Card from './Card';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductProvider} from '@shopify/hydrogen-react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import {useEffect, useRef} from 'react';

function TrendingProducts({products}: {products: Product[]}) {
  //Swipper
  const swiperRef = useRef<any>(null);

  const handleScrollRight = () => {
    swiperRef.current?.slideNext();
  };

  const handleScrollLeft = () => {
    swiperRef.current?.slidePrev();
  };

  const middleSlide = Math.floor(products.length / 2);

  return (
    <div className="trending-section h-auto w-full max-h-[950px] bg-[#F6F6F5] md:p-10 p-0">
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
      <div className="carousel w-full py-7 ">
        {/* <div className="cards w-full flex flex-row flex-nowrap overflow-x-auto  md:gap-8 md:px-0"> */}
        <Swiper
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          simulateTouch={true}
          className="w-full"
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
           {products.map((product, key) => (
            <SwiperSlide key={key}>
              <ProductProvider data={product}>
                <Card price={true} />
              </ProductProvider>
            </SwiperSlide>
          ))} 
        </Swiper>
      </div>
    </div>
    // </div>
  );
}

export default TrendingProducts;
