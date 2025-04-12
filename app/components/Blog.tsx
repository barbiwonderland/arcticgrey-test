import news from '../assets/images/news/news.png';

interface Article {
  image: string;
  title: string;
  description: string;
  autor: string;
  date: string;
}

const articles: Article[] = [
  {
    image: news,
    title: 'Foundational Supplements: Build a Better You',
    description: 'Balanced Diet',
    autor: 'By Emily Thompson',
    date: 'August 31, 2023',
  },
  {
    image: news,
    title:
      'Taming the Fire Within: Everything You Need to Know About Inflammation',
    description: 'Balanced Diet',
    autor: 'By Emily Thompson',
    date: 'August 31, 2023',
  },
];
function Blog() {
  return (
    <>
      <div className="h-[654px] flex flex-col justify-around font-main w-screen overflow-auto ">
        <div className="heading flex flex-row justify-around w-full mb-8">
          <div className="">
            <div className="eyebrow text-[16px]">✍️ Blogs</div>
            <div className="title font-medium text-[40px]">Latest Articles</div>
          </div>
          <div className="blog-action underline text-[16px]">View All</div>
        </div>

        <div className="grid w-[80%] h-[654px] self-center ">
          <div className="bog grid grid-cols-[8fr_7fr] gap-3 h-full">
            <div className="latest-news h-full">
              {articles[0] && (
                <div className="container-card h-full relative text-white font-main">
                  <img
                    className="h-full object-cover rounded-2xl"
                    src={articles[0].image}
                    alt={articles[0].title}
                  />
                  <div className="container-text absolute bottom-10 left-20 w-[370px]">
                    <h3 className="text-[16px]!">{articles[0].description}</h3>
                    <h2 className="text-[24px]! font-medium">
                      {articles[0].title}
                    </h2>
                    <p className="text-[16px]!">
                      {articles[0].autor} | {articles[0].date}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="news grid grid-rows-[1fr_1fr] font-main w-full">
              {articles.map((item, index) => (
                <div
                  key={index}
                  className="container-card w-full flex flex-row justify-around content-center flex-wrap text-[#1B1F23]"
                >
                  <img
                    className=" w-[300px] h-[215px] object-cover rounded-2xl"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="container-text w-[370px] flex flex-col justify-around">
                    <h3 className="text-[16px]!">{item.description}</h3>
                    <h2 className="text-[18px]! font-medium!">{item.title}</h2>
                    <p className="text-[16px]!">
                      {item.autor} | {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
