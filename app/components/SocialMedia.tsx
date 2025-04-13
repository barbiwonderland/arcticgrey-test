import { CgInstagram } from "react-icons/cg"; 
import ig from '../assets/images/instagram/Instagram.png';
function SocialMedia() {
  return (
    <div className="w-screen">
      <div className="w-[90%] h-[500px]  flex mx-auto  ">
        <div className="grid md:w-[95%] w-full h-[500px] grid-cols-auto md:grid-cols-[245px_245px_245px_245px_245px_245px]  rounded-2xl justify-around ">
          <div className="md:w-[500px] w-full h-[245px] bg-[#F6F6F5] col-start-1 col-end-3 flex flex-col flex-wrap justify-around content-center  ">
            <div className="w-[224px] h-[60px] flex flex-row items-center justify-between">
              <div className="logo h-[60px] w-[60px] font-main text-xs text-white font-medium bg-black rounded-full flex justify-center items-center">
                Logo
              </div>
              <div className="font-medium text-[#1B1F23]  text-[20px]">
                @uncmfrt.com
              </div>
            </div>
            <div className="font-main text-[14px] follow-button bg-white h-[55px] w-[240px] border-2 border-black rounded-2xl font-medium flex items-center justify-center">
              Follow Us on Instagram
            </div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          <div className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] ">
            <img src={ig} alt="" />
            <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

            <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl"><CgInstagram size={30} /></div>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
