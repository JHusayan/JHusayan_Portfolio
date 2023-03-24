import React from "react";
import { forwardRef } from "react";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const Introduction = ({ introRef }: any) => {
  return (
    <div
      className="w-full h-screen bg-neutral-900 text-white flex flex-col justify-center "
      ref={introRef}
    >
      <Fade cascade damping={0.1} delay={1400} triggerOnce>
        <h1 className="text-xl font-medium select-none">Hello, I'm</h1>
        <h1 className="text-8xl font-medium mb-6 select-none drop-shadow-lg shadow-neutral-900">
          Joshua Alex L. Husayan
        </h1>
        <h1 className="text-4xl font-medium mb-10 select-none drop-shadow-lg shadow-white">
          an Aspiring Web and Game Developer
        </h1>
        <div className="flex flex-row items-center justify-center space-x-6">
          <Fade
            cascade
            triggerOnce
            damping={0.1}
            delay={1600}
            direction={"left"}
          >
            <a
              href="https://www.facebook.com/100000641954304/"
              type="button"
              className=" flex justify-center m-1 h-12 w-12 border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-neutral-900 hover:border-white focus:outline-none focus:ring-0 drop-shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <FaFacebookF className="h-full w-4" />
            </a>
            <a
              href="https://github.com/JHusayan"
              type="button"
              className=" flex justify-center m-1 h-12 w-12 border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-neutral-900 hover:border-white focus:outline-none focus:ring-0 drop-shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <FaGithub className="h-full w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-alex-husayan-1374411b2/"
              type="button"
              className=" flex justify-center m-1 h-12 w-12 border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-neutral-900 hover:border-white focus:outline-none focus:ring-0 drop-shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <FaLinkedinIn className="h-full w-5" />
            </a>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default forwardRef(Introduction);
