import {  useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {AiOutlineClose} from 'react-icons/ai'

export default function Header({introRef,aboutRef,skillsRef,projectsRef,workRef}:any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleScroll = (ref:any) => {
    ref.current?.scrollIntoView({behavior:'smooth'})
    setMobileMenuOpen(false)
  }; 
  return (
    <header className="flex bg-white text-neutral-900 justify-center shadow-md w-full top-0 left-0 right-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="h-12 w-12 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover"/>            
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <button className="text-md font-semibold leading-6 flex items-center hover:underline" onClick={() => handleScroll(aboutRef)}>
            ABOUT
          </button>
          <button onClick={() => handleScroll(skillsRef)} className="text-md font-semibold leading-6 flex items-center hover:underline">
            SKILLS
          </button>
          <button onClick={() => handleScroll(introRef)} className="text-md font-semibold leading-6 flex items-center hover:underline">
            <span className="sr-only">Joshua Husayan</span>
            <div className="h-20 w-20 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover"/>
          </button>
          <button onClick={() => handleScroll(projectsRef)} className="text-md font-semibold leading-6 flex items-center hover:underline">
            PROJECTS
          </button>
          <button onClick={() => handleScroll(workRef)} className="text-md font-semibold leading-6 flex items-center hover:underline">
            WORK
          </button>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button onClick={handleScroll} className="-m-1.5 p-1.5">
              <span className="sr-only">Joshua Logo</span>
              <div className="h-12 w-12 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover"/>
            </button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <button
                  onClick={handleScroll}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ABOUT
                </button>
                <button
                  onClick={handleScroll}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  SKILLS
                </button>
                <button
                  onClick={handleScroll}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  PROJECTS
                </button>
                <button
                  onClick={handleScroll}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  WORK
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}