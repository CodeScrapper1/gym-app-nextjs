import React from "react";

const TrailSession = () => {
  return (
    <div className="bg-[url('/image/gym-banner.png')] bg-no-repeat bg-cover h-72 grid justify-center items-center border-y-2 border-primary">
      <div>
        <h1 className="banner-heading text-primary text-7xl uppercase font-bold text-transparent bg-clip-text text-stroke">
          Trail Session
        </h1>
        <h2 className="uppercase tracking-wider text-xl my-3">
          free trail with pro trainers
        </h2>
        <button className="banner-btn group flex items-center bg-gradient-to-tr from-primary to-amber-700 outline-none py-2 px-4 text-black transition-all duration-300">
          <span className="relative transition-all duration-300 after:absolute after:opacity-0 group-hover:duration-500 group-hover:pr-5">
            Enroll Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default TrailSession;
