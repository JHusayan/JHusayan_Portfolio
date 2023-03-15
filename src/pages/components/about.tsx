import React from 'react'
import {forwardRef} from 'react'

const About = ({aboutRef}:any) => {
  return (
  <div className='bg-white h-[500px] text-neutral-900 flex flex-col justify-center' ref={aboutRef}>
    <h1>About</h1>
  </div>
  )
}

export default forwardRef(About)