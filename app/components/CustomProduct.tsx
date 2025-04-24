import {GiLindenLeaf} from 'react-icons/gi';
import product from '../assets/images/products/product1.png';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

function CustomProduct() {
  interface ActiveIngredient {
    name: string;
    description: string;
  }
  interface ActiveIngredientsData {
    title: string;
    ingredients: ActiveIngredient[];
  }

  interface Blend {
    title: string;
    benefits: string[];
  }

  interface Product {
    name: string;
    image: string; // O podrías usar un tipo más específico para la imagen, como URL o Buffer
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
        image: 'product image', // Aquí iría la ruta o el objeto de la imagen
      },
    },
  ];
  return (
    <div className="lg:h-[834px] h-auto my-3 w-screen bg-[#F6F6F5] flex flex-col justify-center ">
      <div className="heading font-main flex flex-col justify-center text-center">
        <div className="eyebrowtext[16px]">{productData[0].eyebrow}</div>
        <div className="title text-[40px] font-medium">
          {productData[0].title}
        </div>
      </div>

      <div className="product-container flex flex-row justify-around items-center">
        <ArrowLeft />
        <div className="product-content  grid lg:grid-cols-2 lg:grid-rows-none   justify-items-center font-main mt-12 mb-12 lg:h-[548px] w-[85%] rounded-xl border-2 justify-center self-center border-gray-200">
          <div className="img-container bg-white w-full flex justify-center h-full">
            <img className=" object-contain" src={product} alt="" />
          </div>
          <div className="grid grid-rows-[182px_1fr] w-full lg:border-l-2 border-gray-200 mb-12 lg:mb-0  ">
            <div className="product flex! flex-col justify-center bg-[#1B1F23] text-white w-full gap-3 ">
              <div className="title text-center text-[24px] font-medium">
                {productData[0].blend.title}
              </div>
              <div className="product-description flex flex-row justify-around content-center flex-wrap  text-white w-full ">
                {productData[0].blend.benefits.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="features flex flex-row flex-wrap md:gap-5 content-center text-white font-main h-[50px] justify-between items-center w-auto p-2.5"
                    >
                      <div className="feature-icon bg-[#252A2F] h-8 w-8 md:h-12 md:w-12 rounded-full flex justify-center items-center">
                        <GiLindenLeaf color="#E8DFB4" />
                      </div>
                      <div className="feature-text text-[10px] md:text-[18px]">
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="active-ingredients flex flex-col justify-around flex-wrap content-center bg-white md:my-0 my-5">
              <div className="ingredients-title text-center text-[18px] font-medium">
                {productData[0].ingredients.title}
              </div>
              <div className="ingredients-container flex flex-row flex-wrap justify-around content-center w-full items-center p-5 ">
                {productData[0].ingredients.ingredients.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="ingredient flex flex-col w-[168px] gap-4"
                    >
                      <div className="icon  flex w-8 h-8 md:w-[45px] md:h-[45px] justify-center items-center rounded-full bg-gray-200">
                        <GiLindenLeaf />
                      </div>
                      <div className="ingredient-title font-medium text-[14px] lg:text-[16px]">
                        {item.name}
                      </div>
                      <div className="ingredient-description text-[10px] lg:text-[14px] text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="ingredient-button bg-[#1B1F23] text-white w-[80%] mx-auto rounded-lg h-[50px] text-center items-center flex justify-center font-medium mb-6 mt-6">
                Customize This Blend
              </div>
            </div>
          </div>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
}

export default CustomProduct;
