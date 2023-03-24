import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import React from "react";

const Footer = ({ introRef }: any) => {
  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-white items-center text-neutral-900 flex flex-col justify-center pb-3">
      <div className="container w-full">
        <div className="flex justify-center mb-6">
          <Tooltip content="Scroll to the Top" animation="duration-1000">
            <button
              className="text-md font-semibold leading-6 flex items-center hover:underline"
              onClick={() => handleScroll(introRef)}
            >
              <div className="h-20 w-20 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover"></div>
            </button>
          </Tooltip>
        </div>
        <div className="mb-2 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/100000641954304/"
            type="button"
            className="flex justify-center m-1 h-10 w-10 border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FaFacebookF className="h-full w-3" />
          </a>

          <a
            href="https://github.com/JHusayan"
            type="button"
            className="flex justify-center m-1 h-10 w-10 border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FaGithub className="h-full w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-alex-husayan-1374411b2/"
            type="button"
            className="flex justify-center m-1 h-10 w-10 border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <FaLinkedinIn className="h-full w-5" />
          </a>
        </div>
      </div>

      <div className="select-none w-full flex items-center justify-center">
        <span>© Joshua Husayan 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
