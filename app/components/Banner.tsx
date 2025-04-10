import RollingStones from "../assets/logos/brands/Rolling_Stone.svg"
import Herb from "../assets/logos/brands/Herb.svg"
import Laweekly from "../assets/logos/brands/laweekly.svg"
import MensJournal from "../assets/logos/brands/mensjournal.svg"
import BBC from "../assets/logos/brands/BBC_News.svg"
import NYT from "../assets/logos/brands/thenewyorktimes.svg"

const logos=[RollingStones,Herb,Laweekly,MensJournal,BBC,NYT]


const Banner = () => {
  return (
    <div className="h-[118px] bg-[#F6F6F5] flex flex-row justify-around px-4 items-center w-screen">
      <div className="">
        <div className="">#1Doctor Recommended</div>
      <div className="">⭐⭐⭐⭐⭐12.000+5-star Reviews</div>
      </div>
      <div className="bar h-[70px] w-[1px] bg-gray-300">

      </div>
      <div className="brands flex gap-2 content-center">
      {logos.map((logo, index) => (
         <div key={index} className="square w-[120px] h-[40px] bg-white flex justify-center content-center rounded-sm">
         <img className="object-none" src={logo} alt="" />
     </div>
        ))}
{/* repeat first 2 images */}
    {logos.map((logo, index) => (
        (index == 0 || index == 1) &&
         <div key={index} className="square w-[120px] h-[40px] bg-white flex justify-center content-center rounded-sm">
         <img className="object-none" src={logo} alt="" />
     </div>
        ))}


      </div>
    </div>
  )
}

export default Banner
