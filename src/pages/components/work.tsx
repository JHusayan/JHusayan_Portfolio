import { RefProps } from "../Interface";
import Card from "../../components/card";
import DNALogo from "../../assets/images/dna-logo.png";
import React from "react";
import SymphLogo from "../../assets/images/symph-logo.png";
import Title from "../../components/title";
import USCLogo from "../../assets/images/usc-logo.jpg";
import AllianceLogo from "../../assets/images/alliance-logo.a9e3b235.svg";
import Reveal from "../../components/reveal";
import { useRevealOnce } from "../../hooks/useRevealOnce";

const Work = ({ workRef }: RefProps) => {
  const show = useRevealOnce(workRef, 0.3);

  return (
    <div
      className="bg-standard-black w-full min-h-screen snap-start pt-24 md:pt-32 box-border text-standard-black flex flex-col justify-center px-[10%] items-center pb-3"
      ref={workRef}
    >
      <Reveal show={show}>
        <Title>Work Experience</Title>
      </Reveal>
      {/* <div className="flex items-center justify-center space-y-0 p-2 sm:space-y-0 space-x-0 sm:space-x-12 sm:p-5 flex-col sm:flex-row"> */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 p-2 sm:p-5">
        <Reveal show={show} direction="left" delay={150}>
          <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
            <div className="absolute inset-0">
              <img
                draggable="false"
                className="h-56 w-full object-contain object-center mt-2"
                src={AllianceLogo}
                alt="Alliance Logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-xl font-bold">Software Developer</h1>
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal show={show} direction="left" delay={150}>
          <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
            <div className="absolute inset-0">
              <img
                draggable="false"
                className="h-56 w-full object-contain object-center mt-2"
                src={DNALogo}
                alt="DNA Logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-xl font-bold">Junior Software Developer</h1>
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal show={show} direction="left" delay={250}>
          <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full">
            <div className="absolute inset-0">
              <img
                draggable="false"
                className="h-56 w-full object-contain object-center mt-2"
                src={SymphLogo}
                alt="Symph Logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-xl font-bold">QA Technical Intern</h1>
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal show={show} direction="left" delay={350}>
          <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full">
            <div className="absolute inset-0">
              <img
                draggable="false"
                className="h-56 w-full object-contain object-center mt-2"
                src={USCLogo}
                alt="USC Logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-xl font-bold">Thesis Project Manager</h1>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
};

export default Work;