import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import Card from "./card";
import DNALogo from "../../assets/images/dna-logo.png";
import React from "react";
import SymphLogo from "../../assets/images/symph-logo.png";
import USCLogo from "../../assets/images/usc-logo.jpg";

const Work = ({ workRef }: any) => {
  return (
    <div
      className="bg-standard-black w-screen h-screen text-standard-black flex flex-col space-x-8 justify-center px-[10%] my-[2%] items-center pb-3 "
      ref={workRef}
    >
      <Fade cascade delay={1400} damping={0.2}>
      <h1 className="text-5xl md:mb-6 font-medium mb-0 leading-none tracking-tight text-standard-red md:text-5xl lg:text-6xl select-none underline underline-offset-8 decoration-2 decoration-standard-white">
          Work
        </h1>
        <div className="flex items-center justify-center space-y-5 sm:space-y-0 space-x-0 sm:space-x-12 p-5 flex-col sm:flex-row">
          <Fade
            cascade
            delay={1600}
            damping={0.2}
            direction="left"
          >
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
              <img
                draggable="false"
                className="h-30 w-30 sm:h-64 sm:w-64 object-contain text-standard-white select-none"
                src={DNALogo}
                alt="DNA Logo"
              />
              <div className="font-medium sm:font-bold text-lg sm:text-xl mb-0 sm:mb-2 select-none">
                Junior Software Developer
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full ">
              <img
                draggable="false"
                className="h-30 w-30 sm:h-64 sm:w-64 object-cover select-none"
                src={SymphLogo}
                alt="Symph Logo"
              />
              <div className=" font-medium sm:font-bold text-lg sm:text-xl mb-0 sm:mb-2 select-none">
                QA Technical Intern
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full ">
              <img
                draggable="false"
                className="h-30 w-30 sm:h-64 sm:w-64 object-cover select-none"
                src={USCLogo}
                alt="USC Logo"
              />
              <div className="font-medium sm:font-bold text-lg sm:text-xl mb-0 sm:mb-2 select-none">
                Thesis Project Manager
              </div>
            </Card>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default forwardRef(Work);
