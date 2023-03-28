import { Fade} from "react-awesome-reveal";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { forwardRef } from "react";
import React from "react";

const Introduction = ({ introRef }: any) => {
  return (
    <div
      className="w-screen h-screen p-5  bg-standard-black text-standard-white flex flex-col justify-center md:p-0"
      ref={introRef}
    >
      <Fade triggerOnce cascade damping={0.1} delay={1400}>
        <h1 className="text-lg mb-1 font-medium select-none md:mb-2 md:text-xl ">Hello, I'm</h1>
        <h1 className="text-standard-red text-5xl font-medium mb-4 select-none drop-shadow-lg shadow-neutral-900 md:text-8xl md:mb-6">
          Joshua Alex L. Husayan
        </h1>
        <h1 className="text-xl font-medium mb-8 select-none drop-shadow-lg shadow-white md:text-4xl md:mb-10">
          an Aspiring Web and Game Developer
        </h1>
        <div className="flex flex-row items-center justify-center space-x-4 md:space-x-6">
          <Fade triggerOnce cascade damping={0.1} delay={1600} direction={"left"}>
            <a
              href="https://www.facebook.com/100000641954304/"
              type="button"
              className=" flex justify-center h-10 w-10 border-2 border-standard-red uppercase leading-normal text-standard-red transition duration-150 ease-in-out hover:bg-standard-red hover:text-standard-white hover:border-standard-red focus:outline-none focus:ring-0 drop-shadow-lg md:h-12 md:w-12"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <FaFacebookF className="h-full w-3 md:w-4" />
            </a>
            <a
              href="https://github.com/JHusayan"
              type="button"
              className=" flex justify-center h-10 w-10 border-2 border-standard-red uppercase leading-normal text-standard-red transition duration-150 ease-in-out hover:bg-standard-red hover:text-standard-white hover:border-standard-red focus:outline-none focus:ring-0 drop-shadow-lg md:h-12 md:w-12"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <FaGithub className="h-full w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-alex-husayan-1374411b2/"
              type="button"
              className=" flex justify-center h-10 w-10 border-2 border-standard-red uppercase leading-normal text-standard-red transition duration-150 ease-in-out hover:bg-standard-red hover:text-standard-white hover:border-standard-red focus:outline-none focus:ring-0 drop-shadow-lg md:h-12 md:w-12"
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
