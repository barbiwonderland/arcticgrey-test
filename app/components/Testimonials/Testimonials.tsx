import {Suspense, useRef} from 'react';
import {Swiper, SwiperSlide, useSwiper, useSwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import {GetTestimonialsQuery} from 'storefrontapi.generated';
import {Await} from '@remix-run/react';
import ArrowRight from '../Common/ArrowRight';
import ArrowLeft from '../Common/ArrowLeft';
import {ProductProvider} from '@shopify/hydrogen-react';
import {Product} from '@shopify/hydrogen-react/storefront-api-types';
import {useAside} from '../Common/Aside';

type Video = {
  id: string;
  sources: Array<{
    url: string;
  }>;
};

type ProductVideoMetaobject = {
  metaobjects: {
    nodes: Array<{
      id: string;
      fields: Array<{
        key: 'product' | 'video';
        value: string;
        reference: Product | Video;
      }>;
    }>;
  };
};

function Testimonials({
  testimonials,
}: {
  testimonials: Promise<ProductVideoMetaobject | null>;
}) {
  //Swipper
  const swiperRef = useRef<any>(null);

  const handleScrollRight = () => {
    swiperRef.current?.slideNext();
  };

  const handleScrollLeft = () => {
    swiperRef.current?.slidePrev();
  };
  const {open} = useAside();
  return (
    <>
      <Suspense fallback={'Loading testimonials'}>
        <Await resolve={testimonials}>
          {(result) => {
            console.log(result, 'testim');
            const middleSlide = result?.metaobjects?.nodes
              ? Math.floor(result.metaobjects.nodes.length / 2)
              : 0;

            const pairedReferences = result?.metaobjects.nodes.map((node) => {
              const productField = node.fields.find(
                (f) => f.key === 'product' && 'title' in f.reference,
              );
              const videoField = node.fields.find(
                (f) => f.key === 'video' && 'sources' in f.reference,
              );

              return {
                product: productField?.reference ?? null,
                video: videoField?.reference ?? null,
              };
            });

            console.log(pairedReferences, 'referias pares');
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
                      <div className="absolute top-0 left-3 md:top-15 md:left-[-80px] left-arrow h-10">
                        <ArrowLeft action={() => handleScrollLeft()} />
                      </div>
                      <div className="absolute md:right-[-80px] md:top-15 top-0 right-3 ">
                        <ArrowRight action={() => handleScrollRight()} />
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
                    {pairedReferences &&
                      pairedReferences.map((item, indx) => {
                        const videoUrl =
                          item.video && 'sources' in item.video
                            ? item.video.sources.find((src) =>
                                src.url.endsWith('.mp4'),
                              )?.url
                            : null;
                        const productTitle =
                          item.product && 'title' in item.product
                            ? item.product.title
                            : '';

                        const productImageUrl =
                          item.product && 'images' in item.product
                            ? item.product.images.nodes[0]?.url
                            : '';

                        const productPrice =
                          item.product && 'variants' in item.product
                            ? item.product.variants.nodes[0]?.price.amount
                            : '';

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
                                    <div className="title text[13px] max-w-[200px] ">
                                      {productTitle}
                                    </div>
                                    <div className="price text-xs font-medium">
                                      {productPrice}
                                    </div>
                                  </div>

                                  <ProductProvider
                                    data={item.product as Product}
                                  >
                                    <div
                                      className="button w-[32px] h-[32px] rounded-full flex justify-center bg-black text-white font-medium content-center flex-wrap "
                                      onClick={() => {
                                        open(
                                          'product-detail',
                                          item.product as Product,
                                        );
                                      }}
                                    >
                                      +
                                    </div>
                                  </ProductProvider>
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
