import {Suspense, useEffect, useRef, useState} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Product from '../../assets/images/products/product1.png';
import Testimonial1 from '../../assets/images/testimonials/Rectangle-1.png';
import Testimonial2 from '../../assets/images/testimonials/Rectangle-2.png';
import Testimonial3 from '../../assets/images/testimonials/Rectangle-3.png';
import Testimonial4 from '../../assets/images/testimonials/Rectangle-4.png';
import Testimonial5 from '../../assets/images/testimonials/Rectangle-5.png';
import {Swiper, SwiperSlide, useSwiper, useSwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import {GetTestimonialsQuery} from 'storefrontapi.generated';
import {Await} from '@remix-run/react';
type Product = {
  image: string;
  title: string;
  price: string;
  icon: string;
};



function Testimonials({
  testimonials,
}: {
  testimonials: Promise<GetTestimonialsQuery | null>;
}) {
  //Swipper
  const swiperRef = useRef<any>(null);

  const handleScrollRight = () => {
    swiperRef.current?.slideNext();
  };

  const handleScrollLeft = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <>
      <Suspense fallback={'Loading testimonials'}>
        <Await resolve={testimonials}>
          {(result) => {
            const middleSlide = result?.metaobjects?.nodes
              ? Math.floor(result.metaobjects.nodes.length / 2)
              : 0;

            return (
              <div className="h-auto  bg-[#F6F6F5] flex flex-col flex-wrap justify-center py-10 content-center">
                <div className="titles flex flex-row justify-center text-center">
                  <div className="text font-main text-[16px]">
                    <div className="main-titles flex flex-col justify-content relative">
                      <div className="Trending ">
                        Trusted & Proven by Science
                      </div>
                      <h1 className="text-[40px]! font-medium ">
                        Real People. Real Results.
                      </h1>
                      <div
                        className="absolute top-0 left-3 md:top-15 md:left-[-80px] left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
                        onClick={handleScrollLeft}
                      >
                        <AiOutlineArrowLeft />
                      </div>
                      <div
                        className="absolute md:right-[-80px] md:top-15 top-0 right-3 right-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
                        onClick={handleScrollRight}
                      >
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                    <div className="underline">View all</div>
                  </div>
                </div>

                <div className="slider-container flex flex-col justify-center w-full h-auto pb-10 ">
                  <Swiper
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation]}
                    simulateTouch={true}
                    initialSlide={middleSlide}
                    centeredSlides={true}
                    className="w-full"
                    breakpoints={{
                      375: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },

                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                      },
                      1500: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    {result &&
                      result.metaobjects.nodes.map((item, indx) => {
                        const productField = item.fields.find(
                          (field) => field.key === 'product' && field.reference,
                        );
                        const videoField = item.fields.find(
                          (field) => field.key === 'video' && field.reference,
                        );

                        //format values
                        const productReference =
                          productField && 'reference' in productField
                            ? productField.reference
                            : null;
                        const videoReference =
                          videoField && 'reference' in videoField
                            ? videoField.reference
                            : null;
                        const isProduct =
                          productReference &&
                          'images' in productReference &&
                          'variants' in productReference;
                        const productImageUrl = isProduct
                          ? productReference.images?.nodes?.[0]?.url
                          : '';
                        const productTitle = isProduct
                          ? productReference.title
                          : '';
                        const productPrice = isProduct
                          ? productReference.variants?.nodes[0]?.price.amount
                          : '';
                        //video url mp4 format
                        const videoUrl =
                          videoField?.reference &&
                          'sources' in videoField.reference
                            ? videoField.reference.sources.find((source) =>
                                source.url.endsWith('.mp4'),
                              )?.url
                            : null;

                        return (
                          <SwiperSlide
                            key={indx}
                            className="flex! justify-center!"
                          >
                            {({isActive}) => (
                              <div className="product-container flex flex-col h-full  w-[300px] pb-3">
                                <div className="w-full ">
                                  <video
                                    className={`object-cover w-full mb-5 ${isActive ? 'h-[500px]' : 'h-[420px]'}`}
                                    loop
                                    muted
                                    autoPlay
                                    controls
                                  >
                                    <source src={videoUrl!} type="video/mp4" />
                                  </video>
                                </div>
                                <div className="product-details font-main  w-auto h-[80px] rounded-lg flex flex-row justify-around items-center bg-white ">
                                  <img
                                    className="product-image h-12 w-12"
                                    src={productImageUrl}
                                  />
                                  <div className="text flex flex-col">
                                    <div className="title text[13px]">
                                      {productTitle}
                                    </div>
                                    <div className="price text-xs font-medium">
                                      {productPrice}
                                    </div>
                                  </div>
                                  <div className="button w-[32px] h-[32px] rounded-full flex justify-center bg-black text-white font-medium content-center flex-wrap ">
                                    +
                                  </div>
                                </div>
                              </div>
                            )}
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default Testimonials;
