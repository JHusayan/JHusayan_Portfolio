import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import { RefProps } from "../Interface";
import Awesome from "../../assets/images/awesome.png";
import React from "react";
import Title from "../../components/title";

const About = ({ aboutRef }: RefProps) => {
  return (
    <div
      className="bg-standard-black w-screen h-screen text-standard-white flex flex-col justify-center items-center px-[15%] my-[2%] "
      ref={aboutRef}
    >
      <Fade delay={1400} damping={0.1} triggerOnce>
        <Title>About</Title>
      </Fade>
      <div className="w-full flex flex-col md:flex-row ">
        <div className="h-[150px] w-full md:h-[400px] md:w-[50%] flex ml-0 md:ml-9 justify-center space-y-0 md:space-y-4 sm:mb-2 md:mb-4 select-none p-10 sm:p-0">
          <Fade triggerOnce delay={1600} damping={0.1} direction={"left"}>
            <img
              className="border-2 border-standard-red rounded-full p-1"
              draggable="false"
              src={Awesome}
              alt="self portrait"
            />
          </Fade>
        </div>
        <div className="h-[100%] flex items-center justify-center flex-col space-y-3 w-full px-0 pl-0 mt-28 md:space-y-24 md:px-4 md:pl-24 md:mt-0">
          <Fade triggerOnce direction={"right"} damping={0.1} delay={1600}>
            <p className="font-medium text-base text-justify select-none md:text-xl">
              I am a detail-oriented web developer with experience in HTML, CSS,
              and JavaScript. I enjoy creating visually appealing and
              user-friendly websites, and I am committed to staying up-to-date
              with the latest web development trends. I work well in
              collaborative environments and strive to deliver successful
              projects that exceed expectations.
            </p>
          </Fade>
          <div className="flex w-full justify-center md:justify-start">
            <Fade triggerOnce delay={1600} damping={0.1} direction={"right"}>
              <a
                href="https://drive.google.com/file/d/1XHW_wEnR1j8YItIrC1SzwUTqzPyk97RB/view?usp=sharing"
                type="button"
                className="flex justify-center items-center space-x-9 m-1 py-3 px-7 font-semibold border-2 border-standard-red select-none uppercase leading-normal bg-standard-black text-standard-red transition duration-150 ease-in-out hover:text-standard-white hover:bg-standard-red focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Resume
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(About);
