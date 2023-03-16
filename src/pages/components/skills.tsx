import { Progress } from 'flowbite-react'
import React from 'react'
import {forwardRef} from 'react'

const Skills = ({skillsRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col justify-center mb-12 items-center' ref={skillsRef}>
      <h1>Skills</h1>
      <div className='w-full'>
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
        <div className='h-[50%] w-[50%] p-5 space-y-4'>

        </div>
      </div>
    </div>
  )
}

export default forwardRef(Skills)