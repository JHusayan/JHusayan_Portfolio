import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import { RefProps } from "../Interface";
import CodingPic from "../../assets/images/coding.jpg";
import ProgressBar from "../../components/progress";
import React from "react";
import Title from "../../components/title";

const Skills = ({ skillsRef }: RefProps) => {
  return (
    <div
      className="bg-standard-black w-screen h-screen text-standard-white flex flex-col justify-center px-[10%] my-[2%] pb-3 items-center "
      ref={skillsRef}
    >
      <Fade triggerOnce delay={1400}>
        <Title>Skills</Title>
      </Fade>
      <div className="w-full flex flex-col-reverse md:flex-row">
        {/* Left Image */}
        <div className="h-full w-full p-5 space-y-2 md:h-[50%] md:w-[50%] md:space-y-4">
          <Fade
            triggerOnce
            cascade
            damping={0.1}
            delay={1600}
            direction={"left"}
          >
            <div className="space-y-3">
              <div className="text-base font-medium select-none">HTML</div>
              <ProgressBar progressPercent={85} />
            </div>

            <div className="space-y-3">
              <div className="text-base font-medium  select-none">CSS</div>
              <ProgressBar progressPercent={80} />
            </div>

            <div className="space-y-3">
              <div className="text-base font-medium  select-none">
                JAVASCRIPT
              </div>
              <ProgressBar progressPercent={75} />
            </div>

            <div className="space-y-3">
              <div className="text-base font-medium  select-none">
                TYPESCRIPT
              </div>
              <ProgressBar progressPercent={75} />
            </div>

            <div className="space-y-3">
              <div className="text-base font-medium  select-none">REACTJS</div>
              <ProgressBar progressPercent={75} />
            </div>
          </Fade>
        </div>
        {/* Right Image */}
        <div className="w-full flex justify-center p-3 items-center select-none md:w-[50%] md:space-y-4 md:p-5">
          <Fade triggerOnce delay={1600} direction={"right"}>
            {/* <div className="border-2 border-standard-red rounded-lg p-1"> */}
            <img
              draggable="false"
              className="h-[250px] w-[250px] object-fit grayscale md:h-[350px] md:w-[350px] "
              src={CodingPic}
              alt="Coding"
            />
            {/* </div> */}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Skills);
