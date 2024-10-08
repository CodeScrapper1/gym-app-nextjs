import Link from "next/link";
import React from "react";

const Serivces = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center h-[600px] lg:h-[500px] border-t-2 border-primary">
      <div className="services">
        <h1 className="text-4xl uppercase font-bold text-center lg:text-start">
          OUR <span className="text-primary">services</span>
        </h1>
        <p className="text-gray-600 my-7">
          Our gym offers comprehensive fitness services, including personalized
          training programs, group classes, and nutritional guidance. With
          state-of-the-art equipment and experienced trainers, we cater to all
          fitness levels. Whether you're looking to build strength, lose weight,
          or improve overall wellness, our supportive community and customized
          approach help you reach your goals.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <h4 className="text-primary font-bold">Show All Services</h4>
          <Link href="/services">
            <img src="./image/tab-btn.svg" width={60} alt="" />
          </Link>
        </div>
      </div>
      <div className="grid place-items-center group">
        <div className="absolute right1/2 lg:right-0 w-[300px] lg:w-[400px] transition-all duration-300 translate-x-[-100px] rotate-[35deg] group-hover:translate-x-0 group-hover:rotate-0">
          <img src="./image/card-4.jpg" width="90%" alt="" />
        </div>
        <div className="absolute right1/2 lg:right-0 w-[300px] lg:w-[400px] transition-all duration-300 group-hover:translate-x-[-150px] group-hover:rotate-[-30deg]">
          <img src="./image/card-3.jpg" width="90%" alt="" />
        </div>
        <div className="absolute right1/2 lg:right-0 w-[300px] lg:w-[400px] transition-all duration-300 group-hover:translate-x-[-100px] group-hover:rotate-[-20deg]">
          <img src="./image/card-2.jpg" width="90%" alt="" />
        </div>
        <div className="absolute right1/2 lg:right-0 w-[300px] lg:w-[400px] transition-all duration-300 group-hover:translate-x-[-50px] group-hover:rotate-[-10deg]">
          <img src="./image/card-1.jpg" width="90%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Serivces;
