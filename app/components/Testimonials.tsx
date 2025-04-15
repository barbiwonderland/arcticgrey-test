import {useRef, useState} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Product from '../assets/images/products/product1.png';
import Testimonial1 from '../assets/images/testimonials/Rectangle-1.png';
import Testimonial2 from '../assets/images/testimonials/Rectangle-2.png';
import Testimonial3 from '../assets/images/testimonials/Rectangle-3.png';
import Testimonial4 from '../assets/images/testimonials/Rectangle-4.png';
import Testimonial5 from '../assets/images/testimonials/Rectangle-5.png';

type Product = {
  image: string;
  title: string;
  price: string;
  icon: string;
};

export const sampleProducts: Product[] = [
  {
    image: Testimonial1,
    title: 'Magnesium L-Threonate',
    price: '$49.95',
    icon: Product,
  },
  {
    image: Testimonial2,
    title: 'Magnesium L-Threonate',
    price: '$49.95',
    icon: Product,
  },
  {
    image: Testimonial3,
    title: 'Magnesium L-Threonate',
    price: '$49.95',
    icon: Product,
  },
  {
    image: Testimonial4,
    title: 'Magnesium L-Threonate',
    price: '$49.95',
    icon: Product,
  },
  {
    image: Testimonial5,
    title: 'Magnesium L-Threonate',
    price: '$49.95',
    icon: Product,
  },
  {
    image: Testimonial1,
    title: 'Magnesium L-Threonate',
    price: '$49.95',
    icon: Product,
  },
];

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  let [aciveIndex, setAciveIndex] = useState(2);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const cardWidth = 300 + 12; 
      const centerOffset = (scrollContainer.offsetWidth - cardWidth) / 2;
      scrollContainer.scrollTo({
        left: index * cardWidth - centerOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    const nextIndex=(aciveIndex == sampleProducts.length ? 0 : aciveIndex + 1);
    setAciveIndex(nextIndex)
    scrollToIndex(nextIndex)

  };

  const handleScrollLeft = () => {
    const prevIndex=(aciveIndex == 0 ? sampleProducts.length : aciveIndex - 1);
    setAciveIndex(prevIndex)
    scrollToIndex(prevIndex)
  };

  return (
    <>
      <div className="h-[923px] md:h-auto bg-[#F6F6F5] flex flex-col flex-wrap justify-center py-10">
        <div className="titles flex flex-row justify-center text-center">
          <div className="text font-main text-[16px]">
            <div className="main-titles flex flex-col justify-content relative">
              <div className="Trending ">Trusted & Proven by Science</div>
              <h1 className="text-[40px]! font-medium ">
                Real People. Real Results.
              </h1>
              <div
                className="absolute top-15 left-[-80px] left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
                onClick={handleScrollLeft}
              >
                <AiOutlineArrowLeft />
              </div>
              <div
                className="absolute right-[-80px] top-15 right-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center"
                onClick={handleScrollRight}
              >
                <AiOutlineArrowRight />
              </div>
            </div>
            <div className="underline">View all</div>
          </div>
        </div>

        <div className="slider-container flex flex-col justify-center w-screen h-auto ">
          <div  ref={scrollRef} className="slider-content overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-full pb-10">
            <section className="flex flex-row gap-3 justify-center h-full">
              {sampleProducts.map((item, indx) => (
               
                <div key={indx}>
                  <div
                    key={indx}
                    className="product-container flex flex-col h-[516px]   w-[300px]   pb-3"
                  >
                    <div className="w-full ">
                      <img
                        className={`object-cover w-full mb-5 ${indx === aciveIndex ? 'h-[500px]' : 'h-[420px]'}`}
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="product-details font-main w-[300px] h-[80px] rounded-lg flex flex-row justify-around items-center bg-white ">
                      <img
                        className="product-image h-12 w-12"
                        src={item.icon}
                        alt=""
                      />
                      <div className="text flex flex-col">
                        <div className="title text[13px]">{item.title}</div>
                        <div className="price text-xs font-medium">
                          {item.price}
                        </div>
                      </div>
                      <div className="button w-[32px] h-[32px] rounded-full flex justify-center bg-black text-white font-medium content-center flex-wrap ">
                        +
                      </div>
                    </div>
                  </div>
                  </div>
                
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
