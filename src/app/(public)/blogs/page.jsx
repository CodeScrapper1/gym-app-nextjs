import Banner from "@/components/Banner";
import { blogList, recentBlog } from "@/utils/data";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <Banner title="Blogs" image="./image/services-bg.jpg" />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-20 p-12">
        <div className="mt-16">
          {blogList?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center mb-20 border-y-[1px] border-gray-500`}
            >
              <img
                src={item.blogImg}
                width={20}
                className="w-full md:w-[250px] object-cover"
                alt=""
              />
              <div className="py-5 px-2 md:px-5 w-full text-justify">
                <h2 className="text-primary text-3xl font-bold">
                  {item.heading}
                </h2>
                <p className="text-gray-500">Audience: {item.subHeading}</p>
                <p className="my-4 text-gray-500 text-sm line-clamp-[7]">
                  {item.desc}
                </p>
                <div className="flex gap-5 capitalize text-sm whitespace-nowrap">
                  {item.list?.map((icons, ind) => (
                    <div
                      className="flex flex-col md:flex-row gap-2 items-center text-gray-500"
                      key={ind}
                    >
                      <img src={icons.icon} width={20} alt="" />
                      <p>{icons.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <h2 className="capitalize text-3xl font-bold px-3 mb-7 border-l-4 border-primary">
            Recent Blogs
          </h2>
          {recentBlog?.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer p-4 mb-5 text-sm rounded-lg border-b-2 border-primary bg-[#171717] transition-all duration-300 hover:-translate-y-1"
            >
              <h2>{item.title}</h2>
              <p className="capitalize mt-2 text-gray-500">
                {item.publishedDate} / {item.comment}
              </p>
            </div>
          ))}

          {/* popular blogs  */}
          <div>
            <h2 className="capitalize text-3xl font-bold px-3 my-10 border-l-4 border-primary">
              Popular Blogs
            </h2>
            {recentBlog?.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer p-4 mb-5 text-sm rounded-lg border-b-2 border-primary bg-[#171717] transition-all duration-300 hover:-translate-y-1"
              >
                <h2>{item.title}</h2>
                <p className="capitalize mt-2 text-gray-500">
                  {item.publishedDate} / {item.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
