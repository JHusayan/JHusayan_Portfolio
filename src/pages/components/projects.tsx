import { RefProps } from "../Interface";
import Card from "../../components/card";
import Continual from "../../assets/images/continual-game.png";
import React from "react";
import Rocketry from "../../assets/images/rocketry-game.jpg";
import Thesis from "../../assets/images/thesis-login.png";
import Title from "../../components/title";
import Reveal from "../../components/reveal";
import { useRevealOnce } from "../../hooks/useRevealOnce";

const Projects = ({ projectsRef }: RefProps) => {
  // Lower threshold: stacked cards can exceed the viewport on mobile
  const show = useRevealOnce(projectsRef, 0.3);

  return (
    <div
      className="bg-standard-black w-full min-h-screen snap-start pt-24 md:pt-32 box-border text-standard-black flex flex-col space-y-8 justify-center px-[10%] items-center pb-3"
      ref={projectsRef}
    >
      <Reveal show={show}>
        <Title>Projects</Title>
      </Reveal>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 p-2 sm:p-5">
        <Reveal show={show} direction="left" delay={150}>
          <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
            <div className="absolute inset-0">
              <img
                draggable="false"
                className="h-56 w-full object-contain object-center mt-2"
                src={Thesis}
                alt="Thesis Login Page"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center break-all">
                <h1 className="text-xl font-bold">MonitorMySeaWeed.com</h1>
                <p className="text-base text-standard-white">Thesis Website</p>
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal show={show} direction="left" delay={250}>
          <Card className="h-40 w-40 sm:h-64 sm:w-64 sm:min-w-full bg-standard-white">
            <div className="absolute inset-0">
              <img
                draggable="false"
                className="h-56 w-full object-contain object-center mt-2"
                src={Rocketry}
                alt="Rocketry Hypercasual"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-xl font-bold">Rocketry</h1>
                <p className="text-base text-standard-white">
                  Hyper Casual Mobile Game
                </p>
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
                src={Continual}
                alt="Continual Hypercasual"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-standard-black px-12 text-center text-standard-red border-standard-red border-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-xl font-bold">Continual</h1>
                <p className="text-base text-standard-white">
                  Hyper Casual Computer Game
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;