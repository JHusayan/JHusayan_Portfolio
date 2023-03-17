import React from 'react'
import {forwardRef} from 'react'
import DNALogo from "../../assets/images/dna-logo.png"
import SymphLogo from "../../assets/images/symph-logo.png"
import USCLogo from "../../assets/images/usc-logo.jpg"
import Card from './card'

const Work = ({workRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col space-x-8 justify-center p-5 items-center' ref={workRef}>
      <h1 className="text-8xl font-medium mb-6 leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Work</h1>
      <div className='flex flex-row space-x-8 justify-center p-5 items-center'>
        <Card>
          <img className='object-cover' src={DNALogo} alt="DNA Logo"/>
          Junior Software Developer         
        </Card>
        <Card>
          <img className='object-cover' src={SymphLogo} alt="Symph Logo"/>
          Junior Software Developer         
        </Card>
        <Card>
          <img className='object-cover' src={USCLogo} alt="USC Logo"/>
          Junior Software Developer         
        </Card>
      </div>
    </div>
  )
}

export default forwardRef(Work)