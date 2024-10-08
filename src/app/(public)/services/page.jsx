import Banner from "@/components/Banner";
import { serviceCard, serviceList } from "@/utils/data";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="h-[70vh] relative mb-44">
        <Banner title="Serives" image="./image/services-bg.jpg" />
        <div className="flex justify-center items-center">
          <div className="absolute -bottom-36 md:-bottom-16 flex flex-wrap justify-center gap-2 px-10">
            {serviceList?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 shadow-md shadow-primary transition-all duration-300 hover:-translate-y-2 rounded-xl bg-black w-40 h-36 whitespace-nowrap py-5 px-7"
              >
                {item.icon}
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[85%]">
        {serviceCard?.map((item, index) => (
          <div
            key={index}
            className="relative w-full p-4 cursor-context-menu bg-[#171717] rounded-tr-lg rounded-bl-lg transition-all duration-1000 group"
          >
            <img src={item.image} alt="" />
            <div className="px-5">
              <h3 className="text-primary capitalize text-2xl font-bold mt-6">
                {item.heading}
              </h3>
              <p className="text-sm text-justify text-gray-500 my-6">
                {item.desc}
              </p>
            </div>
            <div className="w-full h-px bg-gray-500 mb-3" />
            <div className="flex items-center justify-end gap-3">
              <img
                src={item.autherImage}
                width={40}
                className="rounded-full border-[3px] border-primary"
                alt=""
              />
              <div className="text-sm text-gray-500">
                Created By{" "}
                <span className="text-primary capitalize font-bold">
                  {item.auther}
                </span>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-primary transition-all duration-500 group-hover:w-[102%] group-hover:h-[102%]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-primary transition-all duration-500 group-hover:w-[102%] group-hover:h-[102%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
