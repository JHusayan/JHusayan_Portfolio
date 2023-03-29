import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import { IconsLink } from "../../components/icons";
import { RefProps } from "../Interface";
import Icons from "../../components/icons";
import React from "react";

const Introduction = ({ introRef }:RefProps) => {
  const {
    url: { facebook, github, linkedIn },
    style: { intro },
    icon: { facebookIcon, githubIcon, linkedInIcon },
  } = IconsLink;
  return (
    <div
      className="w-screen h-screen p-5 bg-standard-black flex flex-col justify-center md:p-0"
      ref={introRef}
    >
      <Fade triggerOnce cascade damping={0.1} delay={1400}>
        <h1 className="text-standard-white text-lg mb-1 font-medium select-none md:mb-2 md:text-xl">
          Hello, I'm
        </h1>
        <h1 className="text-standard-red text-5xl font-medium mb-4 select-none drop-shadow-lg shadow-neutral-900 md:text-8xl md:mb-6">
          Joshua Alex L. Husayan
        </h1>
        <h1 className="text-standard-white text-xl font-medium mb-8 select-none drop-shadow-lg shadow-white md:text-4xl md:mb-10">
          an Aspiring Web and Game Developer
        </h1>
        <Fade triggerOnce cascade damping={0.1} delay={1600} direction={"left"}>
          <div className="flex flex-row items-center justify-center space-x-4 md:space-x-6">
            <Icons url={facebook} style={intro} icon={facebookIcon} />
            <Icons url={github} style={intro} icon={githubIcon} />
            <Icons url={linkedIn} style={intro} icon={linkedInIcon} />
          </div>
        </Fade>
      </Fade>
    </div>
  );
};

export default forwardRef(Introduction);
