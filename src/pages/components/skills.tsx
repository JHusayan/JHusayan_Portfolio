import React from 'react'
import {forwardRef} from 'react'

const Skills = ({skillsRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col justify-center' ref={skillsRef}>
      <h1>Skills</h1>
    </div>
  )
}

export default forwardRef(Skills)