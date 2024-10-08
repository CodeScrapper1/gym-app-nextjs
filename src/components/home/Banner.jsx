import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row items-center my-2 mx-auto">
      <div className="w-4/5 m-auto">
        <div>
          <h1 className="text-lg md:text-2xl text-left uppercase whitespace-nowrap">
            Unlock your full Potential,
          </h1>
          <div className="text-right uppercase font-bold">
            <h1 className="text-primary text-4xl md:text-6xl uppercase whitespace-nowrap">
              Get Stronger,
            </h1>
            <h1 className="text-3xl">Fitter</h1>
          </div>
          <p className="w-4/5 text-gray-600 mt-6 text-justify">
            Discover your potential with personalized training. Get stronger,
            fitter, and healthier with expert guidance. Achieve your fitness
            goals and transform your life.
          </p>
        </div>
        <div className="relative w-full h-11 mt-11">
          <input
            type="search"
            className="w-full bg-transparent outline-none text-sm p-2 border-b-[1px] focus:border-primary focus:text-white transition-all duration-500 placeholder:focus:text-primary"
            placeholder="Find here..."
          />
          <button className="absolute bottom-3 right-0 py-1 px-3 text-sm text-black bg-gradient-to-tr from-primary to-amber-700 border-none">
            Search
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end">
        <img src="./image/main.png" className="w-3/5" alt="" />
      </div>
    </div>
  );
};

export default Banner;
