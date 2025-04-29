import star from "../../assets/icons/star.svg"
const messages = [
  'High Quality Ingredients',
  'Independently Certified',
  'Expert Driven',
  'Shipped Internationally',
];

export default function Marquee() {
  return (
    <div className=" main__container w-full bg-black h-12 flex content-center flex-wrap absolute bottom-0">
        <section className="enable-animation overflow-x-hidden">
        <div className="marquee">      
          <ul className="marquee__content flex whitespace-nowrap w-max">
            {messages.map((message, index) => (
              <div key={index} className="marquee__item flex gap-4">
                <img className="text-white w-4 h-4" src={star} alt="star-icon" />
               <span className="text-white mr-4 text-[14px]" key={index}>{message}</span>

              </div>
            ))}
              {messages.map((message, index) => (
              <div key={index} className="marquee__item flex gap-4">
                <img className="text-white w-4 h-4" src={star} alt="star-icon" />
               <span className="text-white mr-4 font-main text-[14px]" key={index}>{message}</span>

              </div>
            ))}
                  {messages.map((message, index) => (
              <div key={index} className="marquee__item flex gap-4">
                <img className="text-white w-4 h-4" src={star} alt="star-icon" />
               <span className="text-white mr-4 font-main text-[14px]" key={index}>{message}</span>

              </div>
            ))}
            
          </ul>

          
        </div>
        </section>
    </div>
  );
}
