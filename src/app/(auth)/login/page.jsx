import React from "react";

const Login = () => {
  return (
    <div className="bg-[url('/image/card-4.jpg')] h-screen flex justify-center items-center bg-no-repeat bg-cover object-fill">
      <form
        action=""
        className="max-w-sm w-full flex gap-7 flex-col border-y-4 border-primary p-6 rounded-xl bg-[#000000c2]"
      >
        <h2 className="text-primary text-center uppercase text-3xl font-bold">
          Sign In
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full text-gray-500 py-2 outline-none bg-transparent border-b-[1px] border-gray-500 focus:border-primary focus:placeholder:text-primary transition-all duration-300"
        />
        <input
          type="email"
          placeholder="Enter the email"
          className="w-full text-gray-500 py-2 outline-none bg-transparent border-b-[1px] border-gray-500 focus:border-primary focus:placeholder:text-primary transition-all duration-300"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="w-full text-gray-500 py-2 outline-none bg-transparent border-b-[1px] border-gray-500 focus:border-primary focus:placeholder:text-primary transition-all duration-300"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full text-gray-500 py-2 outline-none bg-transparent border-b-[1px] border-gray-500 focus:border-primary focus:placeholder:text-primary transition-all duration-300"
        />
        <div className="flex gap-5">
          <div>
            <input type="radio" name="select" id="" />
            <label htmlFor="">Male</label>
          </div>
          <div>
            <input type="radio" name="select" id="" />
            <label htmlFor="">Female</label>
          </div>
        </div>
        <button className="banner-btn group flex justify-center items-center bg-gradient-to-tr from-primary to-amber-700 outline-none py-2 px-4 text-black transition-all duration-300">
          <span className="relative transition-all duration-300 after:absolute after:opacity-0 group-hover:duration-500 group-hover:pr-5">
            Join Now
          </span>
        </button>
      </form>
    </div>
  );
};

export default Login;
