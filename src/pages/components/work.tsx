import { Card } from 'flowbite-react/lib/esm/components'
import React from 'react'
import {forwardRef} from 'react'
import DNALogo from "../../assets/images/dna-logo.png"
import SymphLogo from "../../assets/images/symph-logo.png"
import USCLogo from "../../assets/images/usc-logo.jpg"

const Work = ({workRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col space-x-8 justify-center p-5 items-center' ref={workRef}>
      <h1>Work</h1>
      <div className='flex flex-row space-x-8 justify-center p-5 items-center'>
        <div className="max-w-sm">
          <Card className="h-90 " imgSrc={DNALogo}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Junior Software Developer
            </h5>
          </Card>
        </div>
        <div className="max-w-sm h-50 w-50">
          <Card className="h-90 object-scale-down" imgSrc={SymphLogo}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              QA Technical Intern
            </h5>
          </Card>
        </div>
        <div className="max-w-sm h-50">
          <Card className="h-90" imgSrc={USCLogo}>
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