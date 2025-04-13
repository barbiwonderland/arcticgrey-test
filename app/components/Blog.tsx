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
      <div className="h-[700px]  flex flex-col justify-around font-main w-screen ">
        <div className="heading flex flex-row justify-between  w-[90%] mb-8 mx-auto items-center">
          <div className="">
            <div className="eyebrow text-[16px]">✍️ Blogs</div>
            <div className="title font-medium text-[40px]">Latest Articles</div>
          </div>
          <div className="blog-action underline text-[16px]">View All</div>
        </div>

        <div className="grid w-[90%] h-[450px] self-center  ">
          <div className="bog grid md:grid-cols-[800px_700px] gap-3 h-full">
            <div className="latest-news h-full">
              {articles[0] && (
                <div className="container-card h-[450px]  relative text-white font-main">
                  <img
                    className="h-full object-cover rounded-2xl"
                    src={articles[0].image}
                    alt={articles[0].title}
                  />
                  <div className="container-text absolute bottom-10 md:left-20 left-10 w-[370px]">
                    <h3 className="text-[16px]!">{articles[0].description}</h3>
                    <h2 className="md:text-[24px]! text-[18px]! font-medium">
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
                  className="md_mb-0 mb-2 container-card w-full flex flex-row md:justify-around justify-start md:content-between flex-wrap text-[#1B1F23]"
                >
                  <img
                    className=" w-[300px] h-[215px] object-cover rounded-2xl"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="container-text w-[370px] flex flex-col justify-around whitespace-normal break-normal">
                    <h3 className="md:text-[16px]! text-[14px]!">{item.description}</h3>
                    <h2 className="md:text-[18px]! text-[15px]! font-medium!">{item.title}</h2>
                    <p className="md:text-[16px]! text-[12px]!">
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
