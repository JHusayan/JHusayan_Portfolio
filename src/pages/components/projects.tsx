import { Carousel } from 'flowbite-react/lib/esm/components'
import React from 'react'
import {forwardRef} from 'react'

const Projects = ({projectsRef}:any) => {
  return (
    <div className='bg-white h-[500px] text-neutral-900 flex flex-col space-x-8 justify-center p-5 items-center' ref={projectsRef}>
    <h1>Projects</h1>
    <div className="h-56  sm:h-64 xl:h-80 2xl:h-96 sm:w-64 xl:w-80 2xl:w-96">
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