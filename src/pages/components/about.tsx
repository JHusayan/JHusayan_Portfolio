import { Fade, Slide } from "react-awesome-reveal";
import { forwardRef } from "react";
import Awesome from "../../assets/images/awesome.png";
import React from "react";

const About = ({ aboutRef }: any) => {
  return (
    <div
      className="bg-white w-full h-screen text-neutral-900 flex flex-col justify-center items-center px-[10%] my-[2%] "
      ref={aboutRef}
    >
      <Fade delay={1400} damping={0.1} triggerOnce>
        <h1 className="text-8xl font-medium mb-6 leading-none tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-white select-none">
          About
        </h1>
      </Fade>
      <div className="w-full flex flex-row">
        <div className="h-[400px] w-[50%] flex ml-9 justify-center space-y-4 mb-4 select-none">
          <Fade delay={1600} damping={0.1} direction={"left"} triggerOnce>
            <img draggable="false" src={Awesome} alt="self portrait" />
          </Fade>
        </div>
        <div className="h-[100%] flex items-center justify-center flex-col space-y-24 w-full px-4 pl-24">
          <Fade cascade damping={0.1} delay={1600} triggerOnce>
            <p className="font-medium text-xl text-left select-none">
              I am a detail-oriented web developer with experience in HTML, CSS,
              and JavaScript. I enjoy creating visually appealing and
              user-friendly websites, and I am committed to staying up-to-date
              with the latest web development trends. I work well in
              collaborative environments and strive to deliver successful
              projects that exceed expectations.
            </p>
          </Fade>
          <div className="flex w-full justify-start">
            <Fade delay={1600} damping={0.1} direction={"right"} triggerOnce>
              <a
                href="https://drive.google.com/file/d/1XHW_wEnR1j8YItIrC1SzwUTqzPyk97RB/view?usp=sharing"
                type="button"
                className="flex justify-center items-center space-x-9 m-1 py-3 px-7 font-semibold border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
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
