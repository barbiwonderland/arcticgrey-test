import {Await, Link} from '@remix-run/react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Card from './Card';
import {Suspense, useRef} from 'react';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductProvider, useProduct} from '@shopify/hydrogen-react';
import {Swiper, SwiperSlide} from 'swiper/react';

function Bundles({bundles}: {bundles: Product[]}) {
  const menuItems = [
    {name: 'Sleep', path: '/sleep'},
    {name: 'Cognitive Function', path: '/cognitive-function'},
    {name: 'Foundational Health', path: '/foundational-health'},
    {name: 'Athletic Performance', path: '/athletic-performance'},
    {name: 'Hormone Support', path: '/hormone-support'},
  ];
  // const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-[789px] w-full flex flex-col font-main px-5">
      <div className="flex flex-row flex-wrap justify-between items-center">
        <div className="bundles-header flex flex-row flex-wrap  ">
          <div className="titles flex flex-col">
            <div className="target text-[16px]">📦 Goals Specific</div>
            <div className="title text-[40px] font-medium">Bundles</div>
          </div>
        </div>
        <div className="menu flex flex-row justify-center ">
          <nav className=" gap-5 flex">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-[#1B1F23] hover:underline hover:underline-offset-8 hover:decoration-gray-400 mb-4 hover:decoration-[0.50rem]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-row flex-wrap gap-3 items-center">
          <div className="underline text-[18px] ">View All Bundles</div>
          <div
            className=" left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
            // onClick={handleScrollLeft}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            className="left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
            // onClick={handleScrollLeft}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>

      <div className="carousel w-full py-7">
        <div
          className="cards md:w-full w-[80%]  mt-5 flex justify-normal md:justify-center md:gap-8 items-center flex-row flex-nowrap  mx-auto md:mx-0 "
          // ref={scrollRef}
        >
          <Swiper
            spaceBetween={20}
            className="w-full"
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {bundles &&
              bundles.map((bundle, key) => (
                <SwiperSlide key={key}>
                  <ProductProvider data={bundle}>
                    <Card price={true} />
                  </ProductProvider>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Bundles;
