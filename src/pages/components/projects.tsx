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
        <div className="flex items-center justify-center space-y-0 p-2 sm:space-y-0 space-x-0 sm:space-x-12 sm:p-5 flex-col sm:flex-row">
          <Fade cascade delay={1600} damping={0.2} direction="left">
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
              <div className="absolute inset-0">
                <img
                  draggable="false"
                  className="h-56 w-full object-contain object-center  mt-2"
                  src={Thesis}
                  alt="Thesis Login Page"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center break-all">
                  <h1 className="text-xl font-bold">MonitorMySeaWeed.com</h1>
                  <p className="text-base text-standard-white">Thesis Website</p>
                </div>
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
              <div className="absolute inset-0">
                <img
                  draggable="false"
                  className="h-56 w-full object-contain object-center  mt-2"
                  src={Rocketry}
                  alt="Rocketry Hypercasual"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">Rocketry</h1>
                  <p className="text-base text-standard-white">Hyper Casual Mobile Game</p>
                </div>
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full ">
              <div className="absolute inset-0">
                <img
                  draggable="false"
                  className="h-56 w-full object-contain object-center  mt-2"
                  src={Continual}
                  alt="Continual Hypercasual"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">Continual</h1>
                  <p className="text-base text-standard-white">Hyper Casual Computer Game</p>
                </div>
              </div>
            </Card>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default forwardRef(Projects);
