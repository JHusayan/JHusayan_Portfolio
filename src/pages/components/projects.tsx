import { Carousel } from "flowbite-react/lib/esm/components";
import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import React from "react";

const Projects = ({ projectsRef }: any) => {
  return (
    <div
      className="bg-white w-screen h-screen text-neutral-900 flex flex-col space-y-8 justify-center px-[10%] my-[2%] items-center pb-3"
      ref={projectsRef}
    >
      <Fade cascade delay={1400} damping={0.2}>
        <h1 className="text-5xl md:mb-6 font-medium mb-32 leading-none tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-white select-none">
          Projects
        </h1>
        <div className="h-64 w-80 xl:h-80 2xl:h-96 xl:w-[400px] 2xl:w-[544px]">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};

export default forwardRef(Projects);
