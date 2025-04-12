import news from '../assets/images/news/news.png';

function News() {
  return (
    <div className="news-container w-screen bg-white h-auto justify-center flex my-16 font-main">
  <div className="news-image-container md:w-[80%] h-auto grid place-items-center">
    <div className="grid w-full items-center md:justify-items-start  ">
      <img className="col-start-1 row-start-1 w-full object-contain h-full" src={news} alt="" />

      <div className="col-start-1 row-start-1 flex flex-col justify-center md:justify-normal px-0 md:px-4 text-white m-0 md:mx-5 items-center md:items-start">
        <div className="title text-[20px] md:text-[50px] font-bold mb-4  justify-center  flex w-full">
          The Next Generation is Here
        </div>
        <div className="description text-[12px] md:text-[16px] mb-6 ">
          Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
        </div>
        <div className="actions flex gap-4 self-center md:self-start">
          <div className="w-[100px] md:w-[190px] text-[12px] md:text-[16px] md:h-12 h-8 rounded-lg bg-white text-black flex items-center justify-center">
            Take The Plunge
          </div>
          <div className="w-[100px] md:w-[190px] text-[12px] md:text-[16px]  md:h-12 h-8 rounded-lg border-2 border-white text-white flex items-center justify-center">
            Dive Deeper
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default News;
