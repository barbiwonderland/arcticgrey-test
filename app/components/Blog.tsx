import {Article} from '~/types/blog-types';
import news from '../assets/images/news/news.png';
import {Suspense, useEffect, useState} from 'react';
import {Await} from '@remix-run/react';

// const articles: Article[] = [
//   {
//     image: news,
//     title: 'Foundational Supplements: Build a Better You',
//     description: 'Balanced Diet',
//     autor: 'By Emily Thompson',
//     date: 'August 31, 2023',
//   },
//   {
//     image: news,
//     title:
//       'Taming the Fire Within: Everything You Need to Know About Inflammation',
//     description: 'Balanced Diet',
//     autor: 'By Emily Thompson',
//     date: 'August 31, 2023',
//   },
// ];
function Blog({blogs}: {blogs: Article[]}) {
  const firstArticle = blogs[0];

  return (
    <>
      <div className="md:h-[700px] h-auto flex flex-col justify-around font-main w-screen mb-10">
        <div className="heading flex flex-row justify-between   w-[90%] mb-8 mx-auto items-center">
          <div className="">
            <div className="eyebrow text-[16px]">✍️ Blogs</div>
            <div className="title font-medium text-[40px]">Latest Articles</div>
          </div>
          <div className="blog-action underline text-[16px]">View All</div>
        </div>

        <div className="grid w-[90%] md:h-[450px] h-full self-center  ">
          return (
          <div className="bog grid md:grid-cols-[800px_700px] gap-3 h-full">
            <div className="latest-news h-full">
              {firstArticle && (
                <div className="container-card h-[450px]  relative text-white font-main">
                  <img
                    className="h-full object-cover rounded-2xl"
                    src={firstArticle?.image.url}
                    alt={firstArticle?.title}
                  />
                  <div className="container-text absolute bottom-10 md:left-20 left-10 w-[370px]">
                    <h3 className="text-[16px]!">{firstArticle?.tags[0]}</h3>
                    <h2 className="md:text-[24px]! text-[18px]! font-medium">
                      {firstArticle?.title}
                    </h2>
                    <p className="text-[16px]!">
                      By Emily Thompson | August 31, 2023
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="news grid grid-rows-[1fr_1fr] font-main w-full ">
              {blogs &&
                blogs.slice(1).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="md_mb-0 mb-2 container-card w-full flex flex-row md:justify-around justify-center md:content-between flex-wrap text-[#1B1F23]"
                    >
                      <img
                        className=" w-[300px] h-[215px] object-cover rounded-2xl"
                        src={item.image.url}
                        alt={item.title}
                      />
                      <div className="container-text w-[370px] flex flex-col md:justify-around items-center md:items-start whitespace-normal break-normal">
                        <h3 className="md:text-[16px]! text-[14px]!">
                          {item.tags}
                        </h3>
                        <h2 className="md:text-[18px]! text-[15px]! font-medium!">
                          {item.title}
                        </h2>
                        <p className="md:text-[16px]! text-[12px]!">
                          By Emily Thompson | August 31, 2023
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          );
        </div>
      </div>
    </>
  );
}

export default Blog;
