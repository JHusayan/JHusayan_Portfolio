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
            <div className="text-base font-medium dark:text-white select-none">
              HTML
            </div>
            <Progress
            className='select-none font-light text-white bg-white'
            progress={90}
            labelProgress={true}
            progressLabelPosition="inside"
            size="lg"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white select-none">
              CSS
            </div>
            <Progress
            className='select-none font-normal text-white bg-white'
            progress={90}
            labelProgress={true}
            progressLabelPosition="inside"
            size="lg"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white select-none">
              JAVASCRIPT
            </div>
            <Progress
            className='select-none font-normal text-white bg-white'
            progress={90}
            labelProgress={true}
            progressLabelPosition="inside"
            size="lg"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white select-none">
              TYPESCRIPT
            </div>
            <Progress
            className='select-none font-normal text-white bg-white'
            progress={80}
            labelProgress={true}
            progressLabelPosition="inside"
            size="lg"
            color="red"
            />
          </div>
          <div className='space-y-3'>
            <div className="text-base font-medium dark:text-white select-none">
              REACTJS
            </div>
            <Progress
            className='select-none font-normal text-white bg-white'
            progress={80}
            labelProgress={true}
            progressLabelPosition="inside"
            size="lg"
            color="red"
            />
          </div>
        </div>
        <div className='flex justify-center w-[50%] p-5 items-center select-none '>
          <img draggable="false" className="h-[350px] w-[350px] object-fit grayscale"src={CodingPic} alt="Coding"/>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Skills)