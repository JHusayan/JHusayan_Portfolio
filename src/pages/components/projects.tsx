import { Carousel } from 'flowbite-react/lib/esm/components'
import React from 'react'
import {forwardRef} from 'react'

const Projects = ({projectsRef}:any) => {
  return (
    <div className='bg-white h-[500px] text-neutral-900 flex flex-col space-y-8 justify-center px-[10%] my-[2%] items-center' ref={projectsRef}>
    <h1 className="text-8xl font-medium mb-6 leading-none tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-white select-none">Projects</h1>
    <div className="h-56  sm:h-64 xl:h-80 2xl:h-96 sm:w-80 xl:w-[400px] 2xl:w-[544px]">
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
  </div>
  )
}

export default forwardRef(Projects)