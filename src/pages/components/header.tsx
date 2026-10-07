import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { RefProps } from "../Interface";
import { AiOutlineClose } from "react-icons/ai";

export default function Header({
  introRef,
  aboutRef,
  skillsRef,
  projectsRef,
  workRef,
}: RefProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (ref?: React.RefObject<HTMLDivElement>) => {
    setMobileMenuOpen(false);
    // Wait a tick so the dialog's scroll lock is released before scrolling
    setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const desktopLink =
    "text-md font-semibold leading-6 flex items-center select-none hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-standard-red";
  const mobileLink =
    "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-standard-black select-none hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-standard-red";

  const navItems = [
    { label: "ABOUT", ref: aboutRef },
    { label: "SKILLS", ref: skillsRef },
    { label: "PROJECTS", ref: projectsRef },
    { label: "WORK", ref: workRef },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-20 flex w-full justify-center bg-standard-white text-standard-black shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1" />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="h-12 w-12 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <button className={desktopLink} onClick={() => handleScroll(aboutRef)}>
            ABOUT
          </button>
          <button className={desktopLink} onClick={() => handleScroll(skillsRef)}>
            SKILLS
          </button>
          <button className={desktopLink} onClick={() => handleScroll(introRef)}>
            <span className="sr-only">Joshua Husayan</span>
            <div className="h-20 w-20 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover" />
          </button>
          <button className={desktopLink} onClick={() => handleScroll(projectsRef)}>
            PROJECTS
          </button>
          <button className={desktopLink} onClick={() => handleScroll(workRef)}>
            WORK
          </button>
        </Popover.Group>
      </nav>

      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 h-80 w-screen overflow-y-auto bg-standard-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button onClick={() => handleScroll(introRef)} className="-m-1.5 p-1.5">
              <span className="sr-only">Joshua Logo</span>
              <div className="h-12 w-12 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover" />
            </button>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-standard-black hover:text-standard-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map(({ label, ref }) => (
                  <button key={label} onClick={() => handleScroll(ref)} className={mobileLink}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}