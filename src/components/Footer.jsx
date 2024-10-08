import { footerList } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center flex-col lg:flex-row max-w-[90%] w-full mx-auto my-16 justify-between">
        <img src="./image/logo.svg" width={180} alt="" />
        <div className="flex flex-wrap justify-center gap-10 md:ga-12 xl:gap-24">
          {footerList?.map((item, index) => (
            <div className="heading-1">
              <div className="flex items-center gap-2">
                <span className="text-primary">{item.icon}</span>
                <h4 className="text-primary uppercase text-2xl font-bold my-4">
                  {item.title}
                </h4>
              </div>
              <div className="flex flex-col whitespace-nowrap gap-1 text-white capitalize text-md">
                {item.list?.map((option, ind) => (
                  <Link
                    href={option.url}
                    className="transition-all duration-500 hover:text-primary"
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
