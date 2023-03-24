import React from "react";
import { forwardRef } from "react";
import { Fade } from "react-awesome-reveal";
import DNALogo from "../../assets/images/dna-logo.png";
import SymphLogo from "../../assets/images/symph-logo.png";
import USCLogo from "../../assets/images/usc-logo.jpg";
import Card from "./card";

const Work = ({ workRef }: any) => {
  return (
    <div
      className="bg-neutral-900 w-full h-screen text-white flex flex-col space-x-8 justify-center px-[10%] my-[2%] items-center pb-3 "
      ref={workRef}
    >
      <Fade cascade delay={1400} damping={0.2}>
        <h1 className="text-8xl font-medium mb-6 leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white select-none">
          Work
        </h1>
        <div className="flex items-center justify-center space-x-12 p-5 flex-col md:flex-row">
          <Fade cascade delay={1600} damping={0.2} direction="left">
            <Card className="h-64 w-64 min-w-full">
              <img
                draggable="false"
                className="h-64 w-64 object-contain"
                src={DNALogo}
                alt="DNA Logo"
              />
              <div className="font-bold text-xl mb-2 select-none">
                Junior Software Developer
              </div>
            </Card>
            <Card className="h-64 w-64 min-w-full">
              <img
                draggable="false"
                className="h-64 w-full object-contain"
                src={SymphLogo}
                alt="Symph Logo"
              />
              <div className="font-bold text-xl mb-2 select-none">
                QA Technical Intern
              </div>
            </Card>
            <Card className="h-64 w-64 min-w-full">
              <img
                draggable="false"
                className="h-64 w-64 object-cover"
                src={USCLogo}
                alt="USC Logo"
              />
              <div className="font-bold text-xl mb-2 select-none">
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
