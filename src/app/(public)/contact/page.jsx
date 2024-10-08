import { Mail, MapPinCheckInside, Smartphone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="relative h-[900px] md:h-[800px]">
        <div className="bg-[url('/image/contact-us.jpg')] bg-no-repeat bg-bottom brightness-75 h-[350px] w-full" />
        <div className="absolute top-[200px] left-0 right-0 w-5/6 lg:w-4/6 mx-auto">
          <div className="grid grid-cols-[1fr_3fr] justify-center w-full">
            <div className="flex flex-col items-center gap-10 bg-[#171717] justify-center">
              <div className="flex flex-col items-center gap-1 capitalize">
                <MapPinCheckInside size={25} />
                <h5 className="font-bold text-primary">Address</h5>
                <p className="text-sm">johr town, lahore</p>
              </div>
              <div className="flex flex-col items-center gap-1 capitalize">
                <Smartphone size={25} />
                <h5 className="font-bold text-primary">Mobile Number</h5>
                <p className="text-sm">0321-76563221</p>
              </div>
              <div className="flex flex-col items-center gap-1 capitalize">
                <Mail size={25} />
                <h5 className="font-bold text-primary">Email</h5>
                <p className="text-sm">mehtabkazmi5@gmail.com</p>
              </div>
            </div>
            <div className="p-12 bg-black">
              <div className="text-center text-4xl uppercase">
                <h1 className="">
                  contact <span className="text-primary">Us</span>
                </h1>
                <p className="text-sm mb-7 tracking-wide font-normal">
                  we'll get back to you soon
                </p>
              </div>
              <input
                type="text"
                className="w-full text-gray-500 py-2 outline-none bg-transparent border-b-[1px] border-gray-500 focus:border-primary focus:placeholder:text-primary transition-all duration-300"
                placeholder="Enter you name"
              />
              <input
                type="email"
                className="my-6 w-full text-gray-500 py-2 outline-none bg-transparent border-b-[1px] border-gray-500 focus:border-primary focus:placeholder:text-primary transition-all duration-300"
                placeholder="Enter you email"
              />
              <textarea
                name=""
                placeholder="Enter you message"
                id=""
                className="my-6 w-full text-gray-500 py-2 outline-none bg-transparent border-b-[1px] border-gray-500 focus:border-primary focus:placeholder:text-primary transition-all duration-300"
              ></textarea>
            </div>
          </div>
          <div className="relative w-full h-96">
            <iframe
              className="absolute top-0 left-0 w-full h-[200px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
