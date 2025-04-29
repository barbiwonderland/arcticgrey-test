import {Await, Link} from '@remix-run/react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import {Suspense, useRef, useState} from 'react';
import {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductProvider} from '@shopify/hydrogen-react';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProductCard from '../Common/ProductCard';

function Bundles({bundles}: {bundles: Promise<Product[]>}) {
  //it can be from the api, in the future i can update
  const menuItems = [
    {name: 'Sleep', path: '/sleep'},
    {name: 'Cognitive Function', path: '/cognitive-function'},
    {name: 'Foundational Health', path: '/foundational-health'},
    {name: 'Athletic Performance', path: '/athletic-performance'},
    {name: 'Hormone Support', path: '/hormone-support'},
  ];

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  //Swipper
  const swiperRef = useRef<any>(null);

  const handleScrollRight = () => {
    swiperRef.current?.slideNext();
  };

  const handleScrollLeft = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <Suspense fallback={<div>Loading Bundles...</div>}>
      <Await resolve={bundles}>
        {(result) => {
          console.log(result, 'resultado bundle');
          const filteredBundles = result.filter((product) => {
            if (!activeFilter) return true;
            return product.tags?.includes(activeFilter);
          });
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
                      <button
                        key={item.path}
                        onClick={() => setActiveFilter(item.name)}
                        className={`md:text-sm text-[10px] mb-4 ${
                          activeFilter === item.name
                            ? 'underline decoration-2 decoration-black underline-offset-4'
                            : 'hover:underline hover:underline-offset-2 hover:decoration-black'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-row flex-wrap gap-3 items-center">
                  <div
                    className="underline text-[18px] "
                    onClick={() => setActiveFilter(null)}
                  >
                    View All Bundles
                  </div>
                  <div
                    className=" left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
                    onClick={handleScrollLeft}
                  >
                    <AiOutlineArrowLeft />
                  </div>
                  <div
                    className="left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
                    onClick={handleScrollRight}
                  >
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>

              {filteredBundles ? (
                <div className="carousel w-full py-7">
                  <div className="cards md:w-full w-[80%]  mt-5 flex justify-normal md:justify-center md:gap-8 items-center flex-row flex-nowrap  mx-auto md:mx-0 ">
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
                      {filteredBundles.map((bundle, key) => (
                        <SwiperSlide key={key}>
                          <ProductProvider data={bundle}>
                            <ProductCard price={true} />
                          </ProductProvider>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              ) : (
                <h2>There are no products in this category</h2>
              )}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default Bundles;
