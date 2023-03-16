import { Card } from 'flowbite-react/lib/esm/components'
import React from 'react'
import {forwardRef} from 'react'

const Work = ({workRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col space-x-8 justify-center p-5 items-center' ref={workRef}>
      <h1>Work</h1>
      <div className='flex flex-row space-x-8 justify-center p-5 items-center'>
        <div className="max-w-sm">
          <Card className="h-90" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Junior Software Developer
            </h5>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="h-90" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              QA Technical Intern
            </h5>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="h-90" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Thesis Project Manager
            </h5>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Work)