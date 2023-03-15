import React from 'react'
import {forwardRef} from 'react'

const Projects = ({projectsRef}:any) => {
  return (
    <div className='bg-white h-[500px] text-neutral-900 flex flex-col justify-center' ref={projectsRef}>
    <h1>Projects</h1>
  </div>
  )
}

export default forwardRef(Projects)