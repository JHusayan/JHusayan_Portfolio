import React from 'react'
import {forwardRef} from 'react'
import Awesome from '../../assets/images/awesome.png'
const About = ({aboutRef}:any) => {
  return (
  <div className='bg-white h-[500px] text-neutral-900 flex flex-col justify-center items-center p-5' ref={aboutRef}>
    <h1 className="text-8xl font-medium mb-6 leading-none tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">About</h1>
      <div className='w-full flex flex-row'>
        <div className='h-[400px] w-[50%] flex justify-center p-5 space-y-4'>
          <img src={Awesome} alt="self portrait"/>
        </div>
        <div className='h-[100%] w-[50%] bg-[red] p-5 space-y-4'>

        </div>
      </div>
  </div>
  )
}

export default forwardRef(About)