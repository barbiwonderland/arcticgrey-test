import Img0 from '../assets/images/Goals-images/Image-0.png';
import Img1 from '../assets/images/Goals-images/Image-1.png';
import Img2 from '../assets/images/Goals-images/Image-2.png';
import Img3 from '../assets/images/Goals-images/Image-3.png';
import Img4 from '../assets/images/Goals-images/Image-4.png';

type CardItem = {
  title: string;
  description: string;
  image: string;
};

const CardImages: CardItem[] = [
  {
    title: 'Sleep',
    description: 'Optimize your sleep patterns.',
    image: Img0,
  },
  {
    title: 'Cognitive Function',
    description: "Enhance your brain's performance and connectivity",
    image: Img1,
  },
  {
    title: 'Foundational Health',
    description: 'Promoting healthy, natural deep sleep day to day',
    image: Img2,
  },
  {
    title: 'Athletic Performance',
    description: 'Increase your healthy tissue, muscle, and energy',
    image: Img3,
  },
  {
    title: 'Hormone Support',
    description: 'Boost your mood, libido, and vitality',
    image: Img4,
  },
];

const GoalsSection = () => {
  return (
    <div className='h-screen'>
      <div className="titles flex justify-center text-center flex-col mt-16 gap-2 w-[404px] h-[138px] mx-auto ">
        <div className="font-main text-[16px]">COMFORTABLY UNCOMFORTABLE </div>
        <div className="font-main text-4xl font-medium">
          Start with your Goals
        </div>
        <div className="font-main text-[16px] text-gray-600">
          We cannot become what we want to be by remaining what we are.{' '}
        </div>
      </div>
      <div className="cards flex flex-row gap-5 justify-center w-full mx-10">
        {CardImages.map((item, index) => {
          const {title, description, image} = item;
          return (
            <div
              key={index}
              className="card w-[487px] h-[287px] flex flex-col justify-start mt-10"
            >
              <div className="img">
                <img src={image} alt={title} />
              </div>
              <div className="text ">
                <div className="title font-main text-[18px] font-medium mt-2">
                  {title}
                </div>
                <div className="description font-main text-[16px] text-gray-700 mt-2 ">
                  {description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoalsSection;
