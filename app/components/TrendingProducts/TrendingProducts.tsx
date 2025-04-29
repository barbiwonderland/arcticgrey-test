import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductProvider} from '@shopify/hydrogen-react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import {useRef} from 'react';
import ProductCard from '../Common/ProductCard';
import ArrowLeft from '../Common/ArrowLeft';
import ArrowRight from '../Common/ArrowRight';

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
    <div
      id="trending-products"
      className="trending-section h-auto w-full max-h-[950px] bg-[#F6F6F5] md:p-10 pt-8"
    >
      <div className="titles flex flex-row justify-center text-center">
        <ArrowLeft action={() => handleScrollLeft()} />

        <div className="text font-main text-[16px]">
          <div className="Trending ">🌟 Trending</div>
          <h1 className="text-[40px] font-medium">Supplements</h1>
          <div className="underline">View all</div>
        </div>
        <ArrowRight action={() => handleScrollRight()} />
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
                <ProductCard price={true} />
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
