
import Consultation from '../assets/icons/about/consultation (1) 1.png';
import Clipbord from '../assets/icons/about/clipboard 1.png'
import Like from '../assets/icons/about/like 1.png';
import Leaves from '../assets/icons/about/leaves (1) 1.png';

const features = [
  {
    icon: Like,
    title: 'We Make It Easy',
    subtitle:
      'Personalized Solutions & Guidance Mean You Get Just What You Need Nothing More',
  },
  {
    icon: Leaves,
    title: 'Clean & Effective',
    subtitle:
      'Proven Ingredients, not Artificial, Crafted By Experts For Optimal Effectiveness',
  },
  {
    icon: Clipbord,
    title: 'Your Free Dietitian',
    subtitle:
      'Every Gainful Subscriber Gets Free, 1:1 Access Their Own Registered Dietitian.',
  },
  {
    icon: Consultation,
    title: 'Made For You',
    subtitle:
      'Performance Is Personal. Personalized & Customizable Products For Your Needs, Body & Goals',
  },
];

function About() {
  return (
    <div className="main-about flex flex-col w-screen main-font md:h-[514px] justify-center mx-10 py-10">
      <div className="text w-[400px] h-auto md:h-32">
        <div className="heading text-[12px] md:text-[16px] mb-2">🧐 Why Health & Fitness</div>
        <div className="title text-[20px] md:text-[40px]font-medium">
          Clean Supplements - Made For You
        </div>
      </div>
      <div className="benefits mt-12 flex flex-row w-full gap-8 flex-wrap  ">
        {features.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="container flex flex-col w-[350px] h-auto"
              >
                <div className="icon bg-black h-10 w-10 md:w-12 md:h-12 rounded-full mb-6 text-white flex items-center justify-center"><img src={item.icon} alt={item.title} /></div>
                <div className="title text-[18px] font-medium <BiLike /><GiThreeLeaves /><TbClipboardText />mb-4">
                  {item.title}
                </div>
                <div className="subtitle text-[12px] md:text-[16px] text-gray-700">{item.subtitle}</div>
              </div>
              </div>
          
          );
        })}
      </div>
    </div>
  );
}

export default About;
