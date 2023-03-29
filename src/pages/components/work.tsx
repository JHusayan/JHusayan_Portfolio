import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import Card from "../../components/card";
import DNALogo from "../../assets/images/dna-logo.png";
import React from "react";
import SymphLogo from "../../assets/images/symph-logo.png";
import USCLogo from "../../assets/images/usc-logo.jpg";

const Work = ({ workRef }: any) => {
  return (
    <div
      className="bg-standard-black w-screen h-screen text-standard-black flex flex-col space-x-0 sm:space-x-8 justify-center px-[10%] my-[2%] items-center pb-3 "
      ref={workRef}
    >
      <Fade triggerOnce cascade delay={1400} damping={0.2}>
        <h1 className="text-5xl md:mb-6 font-medium mb-5 sm:mb-0 leading-none tracking-tight text-standard-red md:text-5xl lg:text-6xl select-none underline underline-offset-8 decoration-2 decoration-standard-white">
          Work Experience
        </h1>
        <div className="flex items-center justify-center space-y-0 p-2 sm:space-y-0 space-x-0 sm:space-x-12 sm:p-5 flex-col sm:flex-row">
          <Fade triggerOnce cascade delay={1600} damping={0.2} direction="left">
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
              <div className="absolute inset-0">
                <img
                  draggable="false"
                  className="h-56 w-full object-contain object-center  mt-2"
                  src={DNALogo}
                  alt="DNA Logo"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">
                    Junior Software Developer
                  </h1>
                </div>
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full ">
              <div className="absolute inset-0">
                <img
                  draggable="false"
                  className="h-56 w-full object-contain object-center  mt-2"
                  src={SymphLogo}
                  alt="Symph Logo"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">QA Technical Intern</h1>
                </div>
              </div>
            </Card>
            <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full ">
              <div className="absolute inset-0">
                <img
                  draggable="false"
                  className="h-56 w-full object-contain object-center  mt-2"
                  src={USCLogo}
                  alt="USC Logo"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">Thesis Project Manager</h1>
                </div>
              </div>
            </Card>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default forwardRef(Work);
