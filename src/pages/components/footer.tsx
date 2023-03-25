import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import React from "react";

const Footer = ({ introRef }: any) => {
  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-standard-white items-center text-standard-black flex flex-col justify-center pb-3 pt-2">
      <div className="container w-full">
        <div className="flex justify-center mb-2 md:mb-6">
          <button
            className="text-md font-semibold leading-6 flex items-center hover:underline"
            onClick={() => handleScroll(introRef)}
          >
            <div className="md:h-20 md:w-20 h-12 w-12 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover"></div>
          </button>
        </div>
        <div className="mb-2 flex justify-center space-x-4 md:space-x-6">
          <a
            href="https://www.facebook.com/100000641954304/"
            type="button"
            className="flex justify-center m-1 h-10 w-10 border-2 border-standard-black uppercase leading-normal text-standard-black transition duration-150 ease-in-out hover:bg-standard-black hover:text-standard-white focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FaFacebookF className="h-full w-3" />
          </a>

          <a
            href="https://github.com/JHusayan"
            type="button"
            className="flex justify-center m-1 h-10 w-10 border-2 border-standard-black uppercase leading-normal text-standard-black transition duration-150 ease-in-out hover:bg-standard-black hover:text-standard-white focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FaGithub className="h-full w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-alex-husayan-1374411b2/"
            type="button"
            className="flex justify-center m-1 h-10 w-10 border-2 border-standard-black uppercase leading-normal text-standard-black transition duration-150 ease-in-out hover:bg-standard-black hover:text-standard-white focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FaLinkedinIn className="h-full w-5" />
          </a>
        </div>
      </div>

      <div className="select-none w-full flex items-center justify-center ">
        <span>© Joshua Husayan 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
