import { Carousel } from "flowbite-react/lib/esm/components";
import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import Card from "./card";
import ContinualGame from "../../assets/images/continual-game.png";
import React from "react";
import RocketryGame from "../../assets/images/rocketry-game.jpg";

const Projects = ({ projectsRef }: any) => {
  return (
    <div
      className="bg-white w-screen h-screen text-neutral-900 flex flex-col space-y-8 justify-center px-[10%] my-[2%] items-center pb-3"
      ref={projectsRef}
    >
      <Fade cascade delay={1400} damping={0.2}>
        <h1 className="text-5xl md:mb-6 font-medium mb-32 leading-none tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-white select-none">
          Projects
        </h1>
        <div className="h-64 w-[300px] sm:h-80 sm:w-[400px] 2xl:h-96 2xl:w-[544px] rounded-md">
          <Carousel>
            <div className="bg-thesis bg-center bg-cover flex justify-center items-start h-full w-full ">
              <span className="bg-clip-text text-transparent bg-neutral-900 font-medium mt-3">
                MonitorMySeaweed.com
              </span>
            </div>
            <div className="bg-continual bg-center bg-cover flex justify-center items-start h-full w-full ">
              <span className="bg-clip-text text-transparent bg-white font-medium mt-3">
                Continual - Hyper Causal Desktop Game
              </span>
            </div>
            <div className="bg-rocketry bg-center bg-cover flex justify-center items-start h-full w-full ">
              <span className="bg-clip-text text-transparent bg-white font-medium mt-3">
              Rocketry - Hyper Causal Mobile Game
              </span>
            </div>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};

export default forwardRef(Projects);
