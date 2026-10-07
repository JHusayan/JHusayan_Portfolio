import { RefProps } from "../Interface";
import Awesome from "../../assets/images/awesome.png";
import React from "react";
import Title from "../../components/title";
import Reveal from "../../components/reveal";
import { useRevealOnce } from "../../hooks/useRevealOnce";

const About = ({ aboutRef }: RefProps) => {
  const show = useRevealOnce(aboutRef);

  return (
    <div
      className="bg-standard-black w-full h-screen snap-start pt-24 md:pt-32 box-border text-standard-white flex flex-col justify-center items-center px-[15%]"
      ref={aboutRef}
    >
      <Reveal show={show}>
        <Title>About</Title>
      </Reveal>
      <div className="w-full flex flex-col md:flex-row">
        <div className="h-[150px] w-full md:h-[400px] md:w-[50%] flex ml-0 md:ml-9 justify-center space-y-0 md:space-y-4 sm:mb-2 md:mb-4 select-none p-10 sm:p-0">
          <Reveal show={show} direction="left" delay={150}>
            <img
              className="border-2 border-standard-red rounded-full p-1"
              draggable="false"
              src={Awesome}
              alt="self portrait"
              decoding="async"
            />
          </Reveal>
        </div>
        <div className="h-[100%] flex items-center justify-center flex-col space-y-3 w-full px-0 pl-0 mt-28 md:space-y-24 md:px-4 md:pl-24 md:mt-0">
          <Reveal show={show} direction="right" delay={150}>
            <p className="font-medium text-base text-justify select-none md:text-xl">
              I'm a software developer who builds and maintains business applications end to end: React and TypeScript on the front, Spring Boot and Java on the back. I enjoy the unglamorous problems, like edge cases, sync issues, and reports that must add up to the cent. Outside of work, I make small games and web projects.
            </p>
          </Reveal>
          <div className="flex w-full justify-center md:justify-start">
            <Reveal show={show} direction="right" delay={300}>
              <a
                href="https://drive.google.com/file/d/1XHW_wEnR1j8YItIrC1SzwUTqzPyk97RB/view?usp=sharing"
                type="button"
                className="flex justify-center items-center space-x-9 m-1 py-3 px-7 font-semibold border-2 border-standard-red select-none uppercase leading-normal bg-standard-black text-standard-red transition duration-150 ease-in-out hover:text-standard-white hover:bg-standard-red focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Resume
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;