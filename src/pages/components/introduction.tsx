import React from 'react'
import {forwardRef} from 'react'
import {FaLinkedinIn, FaFacebookF, FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Introduction = ({introRef}:any) => {
  return (
    <div className='bg-neutral-900 h-[500px] text-white flex flex-col justify-center' ref={introRef}>
      <h1 className='text-xl font-medium select-none'>Hello, I'm</h1>
      <h1 className='text-8xl font-medium mb-6 select-none'>Joshua Alex L. Husayan</h1>
      <h1 className='text-4xl font-medium mb-10 select-none'>an Aspiring Web and Game Developer</h1>
      <div className="flex flex-row items-center justify-center space-x-6">
        <a
          href="https://www.facebook.com/100000641954304/"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-neutral-900 focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <FaFacebookF className='h-full w-4'/>
        </a>
        <a
          href="https://github.com/JHusayan"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-neutral-900 focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <FaGithub className='h-full w-6'/>
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-alex-husayan-1374411b2/"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-neutral-900 focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <FaLinkedinIn className='h-full w-5'/>
        </a>
        {/* <a
          href="#!"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-neutral-900 focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <SiGmail className='h-full w-6'/>
        </a> */}
      </div>
    </div>
  )
}

export default forwardRef(Introduction)
