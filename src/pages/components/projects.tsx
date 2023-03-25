import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import Card from "./card";
import Continual from "../../assets/images/continual-game.png";
import React from "react";
import Rocketry from "../../assets/images/rocketry-game.jpg";
import Thesis from "../../assets/images/thesis-login.png";

const Projects = ({ projectsRef }: any) => {
  return (
    <div
      className="bg-standard-black w-screen h-screen text-standard-black flex flex-col space-y-8 justify-center px-[10%] my-[2%] items-center pb-3"
      ref={projectsRef}
    >
      <Fade cascade delay={1400} damping={0.2}>
        <h1 className="text-5xl md:mb-6 font-medium mb-0 leading-none tracking-tight text-standard-red md:text-5xl lg:text-6xl select-none underline underline-offset-8 decoration-2 decoration-standard-white">
          Projects
        </h1>
        <div className="flex items-center justify-center space-y-5 sm:space-y-0 space-x-0 sm:space-x-12 p-5 flex-col sm:flex-row">
          <Fade cascade delay={1600} damping={0.2} direction="left">
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
              <img
                draggable="false"
                className="h-30 w-30 sm:h-64 sm:w-64 object-cover select-none"
                src={Thesis}
                alt="Thesis Login Page"
              />
              <div className="font-medium sm:font-bold text-lg sm:text-xl mb-0 sm:mb-2 select-none">
                MonitorMySeaWeed.com
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full ">
              <img
                draggable="false"
                className="h-30 w-30 sm:h-64 sm:w-64 object-cover select-none"
                src={Rocketry}
                alt="Rocketry Game Screen"
              />
              <div className=" font-medium sm:font-bold text-lg sm:text-xl mb-0 sm:mb-2 select-none">
                Rocketry - Hyper Casual Mobile Game
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full ">
              <img
                draggable="false"
                className="h-30 w-30 sm:h-64 sm:w-64 object-cover select-none"
                src={Continual}
                alt="Continual Game Screen"
              />
              <div className="font-medium sm:font-bold text-lg sm:text-xl mb-0 sm:mb-2 select-none">
                Continual - Hyper Casual Game
              </div>
            </Card>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default forwardRef(Projects);
