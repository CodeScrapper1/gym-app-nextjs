import { headerList } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="border-b-2 border-primary">
      <nav className="flex justify-between items-center py-2.5 px-7 text-sm">
        <img src="./image/logo.svg" width={50} alt="" />
        <div className="hidden md:flex gap-5 uppercase">
          {headerList?.map((item, index) => (
            <Link
              href={item.url}
              className="relative text-white py-1 px-2 z-0 cursor-pointer transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:content-[''] before:bg-primary before:transition-all before:duration-300 after:absolute after:right-0 after:bottom-0 after:h-full after:w-[2px] after:content-[''] after:bg-primary after:transition-all after:duration-300 hover:before:h-[2px] hover:before:w-full hover:after:h-[2px] hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="border-none text-sm py-2 px-2.5 font-bold bg-primary uppercase rounded-md">
          <Link href="/login">Login</Link>
        </button>
      </nav>
    </div>
  );
};

export default Header;
