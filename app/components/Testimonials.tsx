
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

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({left: 400, behavior: 'smooth'});
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({left: -400, behavior: 'smooth'});
    }
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '80px',
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <div className="h-[923px] bg-[#F6F6F5] flex flex-col flex-wrap justify-center">
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

        <div className="slider-container flex flex-col justify-center ">
        <div className="slider-content overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <section className="flex flex-row gap-3 justify-center">
            {sampleProducts.map((item, index) => (
              <>
                <div key={index} className="product-container flex flex-col h-[516px] hover:min-h-[600px] transition-all duration-300 ease-in-out  w-[300px] group  pb-3">
                  <div className="w-full ">
                    <img
                      className="object-cover w-full mb-5 h-[420px] group-hover:h-[500px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="product-details font-main w-[300px] h-[80px] rounded-lg flex flex-row justify-around items-center bg-white ">
                  <img className="product-image h-12 w-12" src={item.icon} alt="" />
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
              </>
            ))}
          </section>
        </div>
      </div>
      </div>

     
    </>
  );
}

export default Testimonials;
