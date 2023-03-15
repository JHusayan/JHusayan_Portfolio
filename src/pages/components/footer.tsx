//@ts-ignore
import JoshuaLogo from '../../assets/images/active.png'
import React from 'react'
import {FaLinkedinIn, FaFacebookF, FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
  return (
  <footer className="bg-white text-center text-neutral-900 flex flex-col justify-center">
    <div className="container px-6 pt-6 ">
      <div className="flex justify-center mb-6">
        <img
            className="h-20 w-20 "
            draggable="false"
            src={JoshuaLogo}
            alt="Joshua Logo"
          />       
      </div>
      <div className="mb-2 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/100000641954304/"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <FaFacebookF className='h-full w-4'/>
        </a>

        <a
          href="https://github.com/JHusayan"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <FaGithub className='h-full w-6'/>
        </a>

        <a
          href="https://www.linkedin.com/in/joshua-alex-husayan-1374411b2/"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <FaLinkedinIn className='h-full w-5'/>
        </a>

        <a
          href="#!"
          type="button"
          className=" flex justify-center m-1 h-12 w-12 border-2 border-neutral-900 uppercase leading-normal text-neutral-900 transition duration-150 ease-in-out hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-0"
          data-te-ripple-init
          data-te-ripple-color="light">
          <SiGmail className='h-full w-6'/>
        </a>

      </div>
    </div>

  <div className="m-4 text-center">
    <span>
      © Joshua Husayan 2023
    </span>
  </div>
</footer>
  )
}

export default Footer