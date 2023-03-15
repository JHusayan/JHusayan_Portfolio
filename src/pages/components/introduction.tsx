import React from 'react'
import {forwardRef} from 'react'

const Introduction = ({introRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col justify-center' ref={introRef}>
      <h1 className='text-xl font-medium'>Hello, I'm</h1>
      <h1 className='text-8xl font-medium mb-6'>Joshua Alex L. Husayan</h1>
      <h1 className='text-4xl font-medium'>an Aspiring Web and Game Developer</h1>
    </div>
  )
}

export default forwardRef(Introduction)
