
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
// import { RecommendedProductsQuery } from 'storefrontapi.generated';
import Card, { SimpleProduct } from './Card';
import { useRef } from 'react';



function TrendingProducts({
  products,
}: {
  products: SimpleProduct[];
}) {

console.log(products, "productos")
const scrollRef = useRef<HTMLDivElement>(null);

const handleScrollRight = () => {
  console.log("hola")
  console.log(scrollRef.current)
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' }); 
  }
};

const handleScrollLeft = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  }
};
  return (
    <div className="trending-section h-auto w-full bg-[#F6F6F5] p-10">
      <div className="titles flex flex-row justify-center text-center">
        <div className="left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center" onClick={handleScrollLeft}>
          <AiOutlineArrowLeft   />
        </div>
        <div className="text font-main text-[16px]">
          <div className="Trending ">🌟 Trending</div>
          <h1 className="text-[40px] font-medium">Supplements</h1>
          <div className="underline">View all</div>
        </div>
        <div className="right-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center" onClick={handleScrollRight}>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="carousel group">
        <div  className="cards w-full mt-5 flex justify-center gap-8 items-center overflow-x-scroll scrollbar-hide scroll-smooth" ref={scrollRef}>
        
          {products && products.map((product, index)=>{
            console.log(product,"indiviaul")
            return(
              <Card item ={product} key = {index} />
            )
          })}
         
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
