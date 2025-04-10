import RollingStones from "../assets/logos/brands/Rolling_Stone.svg"
import Herb from "../assets/logos/brands/Herb.svg"
import Laweekly from "../assets/logos/brands/laweekly.svg"
import MensJournal from "../assets/logos/brands/mensjournal.svg"
import BBC from "../assets/logos/brands/BBC_News.svg"
import NYT from "../assets/logos/brands/thenewyorktimes.svg"

const logos=[RollingStones,Herb,Laweekly,MensJournal,BBC,NYT]


const Banner = () => {
  return (
    <div className=" h-64 md:h-[118px] bg-[#F6F6F5] flex flex-row justify-around px-4 items-center w-screen">
      <div className="">
        <div className="md:w-[200px] w-[150px] h-[38px] bg-gray-400 border-black border-[1px] rounded-lg mb-3 "><span className="md:text-[14px] flex-wrap text-xs h-full font-main flex justify-center content-center">#1Doctor Recommended</span></div>
      <div className="text-xs font-main flex flex-col md:flex-row"><span className="mb-2.5">⭐⭐⭐⭐⭐</span>12.000+5-star Reviews</div>
      </div>
      <div className="bar h-[70px] w-[1px] bg-gray-300 mx-5 md:mx-0">

      </div>
      <div className="brands flex gap-2 justify-end md:justify-center md:w-full lg:w-1/2 flex-wrap ">
      {logos.map((logo, index) => (
         <div key={index} className="square md:w-[120px] md:h-[40px] h-[40px] w-[80px] bg-white flex justify-center  content-center rounded-sm ">
         <img className="object-contain md:object-none max-w-10 md:max-w-none" src={logo} alt="brand" />
     </div>
        ))}
{/* repeat first 2 images */}



      </div>
    </div>
  )
}

export default Banner
