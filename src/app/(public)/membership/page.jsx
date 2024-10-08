import Banner from "@/components/Banner";
import React from "react";

const Membership = () => {
  return (
    <div>
      <Banner title="Membership" image="./image/membership-bg.jpg" />
      <div className="container mx-auto mt-10 lg:mt-0 flex items-center gap-10">
        <div
          className="text-4xl font-bold uppercase text-center lg:text-right"
          style={{ width: "33%" }}
        >
          simple <span className="text-primary italic">&</span> trqansparent{" "}
          <span className="text-primary italic">pricing</span> sizes
        </div>
        <div
          style={{ width: "67%" }}
          className="w-3/4 flex flex-wrap items-center justify-center gap-8 text-white my-7 py-20 bg-[#131313] rounded-2xl border-b-2 border-b-primary"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className={`relative flex flex-col items-center capitalize border-2 ${
                index === 1 ? "border-primary" : "border-black"
              } rounded-xl py-8 px-6 w-2/3 md:w-[28%]`}
            >
              <img
                src={
                  index === 1
                    ? "./image/pricing-2.svg"
                    : "./image/pricing-1.svg"
                }
                className="absolute left-0 top-0"
                width={50}
                alt=""
              />
              <h4 className="text-xl font-bold">monthly</h4>
              <h1 className="text-5xl font-bold my-6">
                <span className="text-primary">Rs.</span>8,000
              </h1>
              <ul className="flex flex-col gap-3 mb-8">
                <li>Gentle community</li>
                <li>Personal fitness</li>
                <li>Nutrition Check-in</li>
                <li>Free Trail classes</li>
                <li>Professional coaching</li>
              </ul>
              <button className="banner-btn group flex items-center bg-gradient-to-tr from-primary to-amber-700 outline-none py-2 px-4 text-black transition-all duration-300">
                <span className="relative transition-all duration-300 after:absolute after:opacity-0 group-hover:duration-500 group-hover:pr-5">
                  Join Now
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
