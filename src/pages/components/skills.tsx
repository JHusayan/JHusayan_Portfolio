import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import { Progress } from "flowbite-react";
import CodingPic from "../../assets/images/coding.jpg";
import React from "react";

const Skills = ({ skillsRef }: any) => {
  return (
    <div
      className="bg-neutral-900 w-full h-screen text-white flex flex-col justify-center px-[10%] my-[2%] pb-3 items-center "
      ref={skillsRef}
    >
      <Fade triggerOnce delay={1400}>
        <h1 className="text-8xl font-medium mb-6 leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white select-none">
          Skills
        </h1>
      </Fade>

      <div className="w-full flex flex-row">
        <div className="h-[50%] w-[50%] p-5 space-y-4">
          <Fade
            cascade
            damping={0.1}
            triggerOnce
            delay={1600}
            direction={"left"}
          >
            <div className="space-y-3">
              <div className="text-base font-medium dark:text-white select-none">
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
        <div className="w-[50%] flex justify-center p-5 items-center select-none">
          <Fade delay={1600} direction={"right"} triggerOnce>
            <img
              draggable="false"
              className="h-[350px] w-[350px] object-fit grayscale"
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
