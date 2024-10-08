import Link from "next/link";
import React from "react";

const LatestBlogs = () => {
  return (
    <div className="grid gap-12 mt-24 lg:mt-0 place-items-center text-white">
      <h1 className="uppercase text-4xl font-bold">
        Latest from <span className="text-primary">blogs</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-20 lg:gap-40">
        <div className="grid grid-cols-[80%_20%]">
          <div>
            <img src="./image/gym-guru.svg" width="80px" alt="" />
            <h2 className="text-primary uppercase text-2xl font-bold">
              Gym Guru
            </h2>
            <p className="text-gray-600 text-lg my-2">
              Mastering the Fitness Lifestyle
            </p>
            <p className="text-justify text-md line-clamp-6">
              “Gym Guru” is here to become your greatest and best partner on the
              hard road to becoming a slave of health, so join us in achieving
              your health and wellness goals. In this blog, we go over the
              fundamentals of fitness by sharing expert advice, and provide
              actionable strategies for exercise, nutrition, as well as include
              the practices for mindset into your daily lifestyle. Whether you
              are an advanced gym-going aficionado or merely a newbie on your
              fitness journey you can totally rely on the “Gym Guru” for
              assistance every step of the way.
            </p>
          </div>
          <div className="bg-primary w-full h-full relative overflow-hidden before:bg-black before:content-[''] before:absolute before:bottom-0 before:h-full before:w-12 before:rounded-ee-[50%]" />
        </div>
        <div className="grid grid-cols-[80%_20%]">
          <div>
            <img src="./image/gym-guru.svg" width="80px" alt="" />
            <h2 className="text-primary uppercase text-2xl font-bold">
              Gym Guru
            </h2>
            <p className="text-gray-600 text-lg my-2">
              Mastering the Fitness Lifestyle
            </p>
            <p className="text-justify text-md line-clamp-6">
              “Gym Guru” is here to become your greatest and best partner on the
              hard road to becoming a slave of health, so join us in achieving
              your health and wellness goals. In this blog, we go over the
              fundamentals of fitness by sharing expert advice, and provide
              actionable strategies for exercise, nutrition, as well as include
              the practices for mindset into your daily lifestyle. Whether you
              are an advanced gym-going aficionado or merely a newbie on your
              fitness journey you can totally rely on the “Gym Guru” for
              assistance every step of the way.
            </p>
          </div>
          <div className="bg-primary w-full h-full relative overflow-hidden before:bg-black before:content-[''] before:absolute before:bottom-0 before:h-full before:w-12 before:rounded-ee-[50%]" />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-10">
        <h4 className="text-primary text-lg font-bold">Show all blogs</h4>
        <Link href="/blogs">
          <img
            src="./image/tab-btn.svg"
            className="transition-all duration-500 hover:translate-x-1"
            width={70}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogs;
