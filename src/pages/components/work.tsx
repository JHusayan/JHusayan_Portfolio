import React from 'react'
import {forwardRef} from 'react'

const Work = ({workRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col justify-center' ref={workRef}>
      <h1>Work</h1>
    </div>
  )
}

export default forwardRef(Work)