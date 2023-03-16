import React from 'react'
import {forwardRef} from 'react'

const About = ({aboutRef}:any) => {
  return (
  <div className='bg-white h-[500px] text-neutral-900 flex flex-col justify-center items-center p-5' ref={aboutRef}>
    <h1>About</h1>
      <div className='w-full flex flex-row'>
        <div className='h-[50%] w-[50%] bg-[blue] p-5 space-y-4'>

        </div>
        <div className='h-[100%] w-[50%] bg-[red] p-5 space-y-4'>

        </div>
      </div>
  </div>
  )
}

export default forwardRef(About)