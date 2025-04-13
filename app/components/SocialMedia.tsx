import ig from '../assets/images/instagram/Instagram.png';
function SocialMedia() {
  return (
    <div className="w-screen">
      <div className="w-[90%] h-[500px]  flex mx-auto  ">
        <div className="grid w-[95%] h-[500px] grid-cols-[245px_245px_245px_245px_245px_245px]  rounded-2xl justify-around ">
          <div className="w-[500px] h-[245px] bg-[#F6F6F5] col-start-1 col-end-3 flex flex-col flex-wrap justify-around content-center  ">
            <div className="w-[224px] h-[60px] flex flex-row items-center justify-between">
              <div className="logo h-[60px] w-[60px] font-main text-xs text-white font-medium bg-black rounded-full flex justify-center items-center">
                Logo
              </div>
              <div className="font-medium text-[#1B1F23]  text-[20px]">@uncmfrt.com</div>
            </div>
            <div className="font-main text-[14px] follow-button bg-white h-[55px] w-[240px] border-2 border-black rounded-2xl font-medium flex items-center justify-center">
            Follow Us on Instagram
            </div>
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
          <div className="w-[245px] h-[255px] ">
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
