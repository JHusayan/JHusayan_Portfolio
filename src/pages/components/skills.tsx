import { Progress } from 'flowbite-react'
import React from 'react'
import {forwardRef} from 'react'
import CodingPic from "../../assets/images/coding.jpg"

const Skills = ({skillsRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col justify-center px-[10%] my-[2%] pb-3 items-center' ref={skillsRef}>
      <h1 className="text-8xl font-medium mb-6 leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white select-none">Skills</h1>
      <div className='w-full flex flex-row'>
        <div className='h-[50%] w-[50%] p-5 space-y-4'>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white">
              HTML
            </div>
            <Progress
            progress={90}
            size="md"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white">
              CSS
            </div>
            <Progress
            progress={90}
            size="md"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white">
              JAVASCRIPT
            </div>
            <Progress
            progress={90}
            size="md"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white">
              TYPESCRIPT
            </div>
            <Progress
            progress={80}
            size="md"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white">
              REACTJS
            </div>
            <Progress
            progress={80}
            size="md"
            color="red"
            />
          </div>
        </div>
        <div className='flex justify-center w-[50%] p-5 space-y-4'>
          <img className="h-[300px] w-[300px] object-fit grayscale"src={CodingPic} alt="Coding"/>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Skills)