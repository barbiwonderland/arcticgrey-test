import {GiLindenLeaf} from 'react-icons/gi';
import product from '../../assets/images/products/product1.png';
import ArrowLeft from '../Common/ArrowLeft';
import ArrowRight from '../Common/ArrowRight';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useRef} from 'react';

//in the future i can add metaobjet of customproduct instead of mocked data
function CustomProducts() {
  interface Ingredient {
    name: string;
    description: string;
  }

  interface Blend {
    title: string;
    benefits: string[];
  }

  interface Product {
    name: string;
    image: string; // Aquí debería ser una cadena con la URL de la imagen
  }

  interface ActiveIngredientsData {
    title: string;
    ingredients: Ingredient[];
  }

  interface ProductData {
    eyebrow: string;
    title: string;
    blend: Blend;
    ingredients: ActiveIngredientsData;
    action: string;
    product: Product;
  }
  const productData: ProductData[] = [
    {
      eyebrow: 'Simple & Effective Ingredients',
      title: 'Customized Omega-3',
      blend: {
        title: 'The Blend',
        benefits: ['Whey Based', 'Build Muscle', 'Clean Ingredients'],
      },
      ingredients: {
        title: 'Active Ingredients',
        ingredients: [
          {
            name: 'Whey Protein Isolate',
            description:
              'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Rep',
          },
          {
            name: 'Whey Protein Isolate',
            description:
              'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Rep',
          },
          {
            name: 'Whey Protein Isolate',
            description:
              'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Rep',
          },
        ],
      },
      action: 'Customize This Blend',
      product: {
        name: 'Momentous Essential Grass-Fed Whey Protein Isolate',
        image: product,
      },
    },
    {
      eyebrow: 'Simple & Effective Ingredients',
      title: 'Customized Protein Powder',
      blend: {
        title: 'The Blend',
        benefits: ['Whey Based', 'Build Muscle', 'Clean Ingredients'],
      },
      ingredients: {
        title: 'Active Ingredients',
        ingredients: [
          {
            name: 'Whey Protein Isolate',
            description:
              'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Rep',
          },
          {
            name: 'Whey Protein Isolate',
            description:
              'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Rep',
          },
          {
            name: 'Whey Protein Isolate',
            description:
              'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Rep',
          },
        ],
      },
      action: 'Customize This Blend',
      product: {
        name: 'Momentous Essential Grass-Fed Whey Protein Isolate',
        image: product,
      },
    },
  ];
  //Swipper
  const swiperRef = useRef<any>(null);

  const handleScrollRight = () => {
    swiperRef.current?.slideNext();
  };

  const handleScrollLeft = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="custom-products-container ">
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        simulateTouch={true}
        className="w-full"
        slidesPerView={1}
        spaceBetween={10}
        direction="horizontal"
        
      >
        {productData.slice(0, 2).map((product, i) => (
          <SwiperSlide key={i}>
            <div className="h-auto my-3 w-screen bg-[#F6F6F5] flex flex-col justify-center ">
              <div className="heading font-main flex flex-col justify-center text-center pt-5">
                <div className="eyebrowtext[16px]">
                  {productData[0].eyebrow}
                </div>
                <div className="title md:text-[40px] text-2xl font-medium">
                  {product.title}
                </div>
              </div>
              <div className="product-container flex flex-row justify-around items-center">
                <ArrowLeft action={() => handleScrollLeft()} />

                <div className="product-content  grid lg:grid-cols-2 lg:grid-rows-none   justify-items-center font-main md:mt-12 my-6 md:mb-12 lg:h-[548px] w-[85%] rounded-xl border-2 justify-center self-center border-gray-200  ">
                  <div className="img-container bg-white w-full flex justify-center h-full mt-5 lg:mt-0">
                    <img
                      className=" object-contain"
                      src={product.product.image}
                      alt=""
                    />
                  </div>
                  <div className="grid grid-rows-[auto] w-full lg:border-l-2 border-gray-200  lg:mb-0  ">
                    <div className="product flex! flex-col justify-center bg-[#1B1F23] text-white w-full gap-3 items-center ">
                      <div className="title text-center flex text-[18px] xl:text-[24px] font-medium">
                        {productData[0].blend.title}
                      </div>
                      <div className="product-description flex flex-row justify-around content-center flex-wrap  text-white w-full ">
                        {productData[0].blend.benefits.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="features flex flex-row flex-wrap xl:gap-5 content-center text-white font-main h-[50px] justify-between items-center w-auto p-2.5"
                            >
                              <div className="feature-icon bg-[#252A2F] h-8 w-8 md:h-12 md:w-12 rounded-full flex justify-center items-center">
                                <GiLindenLeaf color="#E8DFB4" />
                              </div>
                              <div className="feature-text text-[10px] lg:text-[12px]  xl:text-[18px]">
                                {item}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="active-ingredients flex flex-col justify-around flex-wrap content-center bg-white mb-5 md:mb-0   ">
                      <div className="ingredients-title text-center text-[18px] font-medium ">
                        {productData[0].ingredients.title}
                      </div>
                      <div className="ingredients-container flex flex-row flex-wrap justify-around content-center w-full items-center lg:p-0 p-5 ">
                        {productData[0].ingredients.ingredients.map(
                          (item, index) => {
                            return (
                              <div
                                key={index}
                                className="ingredient flex flex-col w-[168px] gap-4"
                              >
                                <div className="icon  flex w-8 h-8 md:w-[45px] md:h-[45px] justify-center items-center rounded-full bg-gray-200">
                                  <GiLindenLeaf />
                                </div>
                                <div className="ingredient-title font-medium text-[14px] xl:text-[16px]">
                                  {item.name}
                                </div>
                                <div className="ingredient-description text-[10px] xl:text-[14px] text-gray-400">
                                  {item.description}
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                      <div className="ingredient-button bg-[#1B1F23] text-white w-[80%] mx-auto rounded-lg h-[50px] text-center items-center flex justify-center font-medium lg:my-0 mb-6 mt-6">
                        Customize This Blend
                      </div>
                    </div>
                  </div>
                </div>

                <ArrowRight action={() => handleScrollRight()} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomProducts;
