import React from "react";

const Banner = ({ image, title }) => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center bg-fixed h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-center text-4xl md:text-5xl uppercase whitespace-nowrap [text-shadow:_2px_3px_0_black] font-bold">
        Our <span className="text-primary">{title}</span>
      </h1>
    </div>
  );
};

export default Banner;
