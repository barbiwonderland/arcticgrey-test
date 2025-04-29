import Marquee from "./Marquee";

function Hero() {
  return (
    <div className="w-full">
      {/* {image && ( */}

      <div className="relative !min-h-[100svh] md:h-screen w-screen ">
        {/* <Image data={image} sizes="100vw" /> */}
        <video
          width="100%"
          autoPlay
          muted
          loop
          className="!min-h-[100svh] ms:h-screen! object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/00895dae9f1948d08c6d42b6cf20e338.mp4"
          typeof="video/mp4"
        ></video>
      </div>
      {/* )} */}
      <div className="lg:w-[854px] md-w-[454px] md:!h-[264px]  absolute md:bottom-52 gap-10 md:gap-0 bottom-[100px]  left-[30px] md:left-[40px] flex flex-wrap md:content-between flex-row  sm:left-[16px] sm:w-[50%] sm:content-center">
        <h1 className="font-main text-white font-semibold w-full lg:!text-[70px] md:!text-[60px] sm:!text-[50px] !m-0 !leading-none sm:!text-xs">
          Great things never came from comfort zones.ss
        </h1>
        <div className="bg-white h-[50px] w-[160px] rounded-lg flex justify-center items-center ">
          Shop Now
        </div>
      </div>
      <Marquee />
    </div>
  );
}

export default Hero;
