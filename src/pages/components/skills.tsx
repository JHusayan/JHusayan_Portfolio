import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import { Progress } from "flowbite-react";
import CodingPic from "../../assets/images/coding.jpg";
import React from "react";

const Skills = ({ skillsRef }: any) => {
  return (
    <div
      className="bg-neutral-900 w-screen h-screen text-white flex flex-col justify-center px-[10%] my-[2%] pb-3 items-center "
      ref={skillsRef}
    >
      <Fade delay={1400}>
        <h1 className="text-5xl font-medium mb-2 leading-none tracking-tight text-white lg:text-6xl dark:text-white select-none md:mb-6 md:text-8xl">
          Skills
        </h1>
      </Fade>
      <div className="w-full flex flex-col-reverse md:flex-row">
        {/* Left Image */}
        <div className="h-full w-full p-5 space-y-2 md:h-[50%] md:w-[50%] md:space-y-4">
          <Fade cascade damping={0.1} delay={1600} direction={"left"}>
            <div className="space-y-3">
              <div className="text-base font-medium dark:text-white select-none ">
                HTML
              </div>
              <Progress
                className="select-none font-light text-white bg-white"
                progress={90}
                labelProgress={true}
                progressLabelPosition="inside"
                size="lg"
                color="red"
              />
            </div>
            <div className="space-y-3">
              <div className="text-base font-medium dark:text-white select-none">
                CSS
              </div>
              <Progress
                className="select-none font-normal text-white bg-white"
                progress={90}
                labelProgress={true}
                progressLabelPosition="inside"
                size="lg"
                color="red"
              />
            </div>
            <div className="space-y-3">
              <div className="text-base font-medium dark:text-white select-none">
                JAVASCRIPT
              </div>
              <Progress
                className="select-none font-normal text-white bg-white"
                progress={90}
                labelProgress={true}
                progressLabelPosition="inside"
                size="lg"
                color="red"
              />
            </div>
            <div className="space-y-3">
              <div className="text-base font-medium dark:text-white select-none">
                TYPESCRIPT
              </div>
              <Progress
                className="select-none font-normal text-white bg-white"
                progress={80}
                labelProgress={true}
                progressLabelPosition="inside"
                size="lg"
                color="red"
              />
            </div>
            <div className="space-y-3">
              <div className="text-base font-medium dark:text-white select-none">
                REACTJS
              </div>
              <Progress
                className="select-none font-normal text-white bg-white"
                progress={80}
                labelProgress={true}
                progressLabelPosition="inside"
                size="lg"
                color="red"
              />
            </div>
          </Fade>
        </div>
        {/* Right Image */}
        <div className="w-full flex justify-center p-3 items-center select-none md:w-[50%] md:space-y-4 md:p-5">
          <Fade delay={1600} direction={"right"}>
            <img
              draggable="false"
              className="h-[250px] w-[250px] object-fit grayscale md:h-[350px] md:w-[350px]"
              src={CodingPic}
              alt="Coding"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Skills);
