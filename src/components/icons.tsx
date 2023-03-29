import React from "react";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
interface IconProps {
  url: string;
  style: string;
  icon: JSX.Element;
}
export const IconsLink = {
  url: {
    facebook: "https://www.facebook.com/100000641954304/",
    github: "https://github.com/JHusayan",
    linkedIn: "https://www.linkedin.com/in/joshua-alex-husayan-1374411b2/",
  },
  style: {
    intro:
      `border-standard-red text-standard-red hover:bg-standard-red hover:text-standard-white hover:border-standard-red md:h-12 md:w-12`,
    footer:
      `border-standard-black text-standard-black hover:bg-standard-black hover:text-standard-white`,
  },
  icon: {
    facebookIcon: <FaFacebookF className="h-full w-3" />,
    githubIcon: <FaGithub className="h-full w-6" />,
    linkedInIcon: <FaLinkedinIn className="h-full w-5" />,
  },
};

const Icons = ({ url, style, icon }: IconProps) => {
  return (
    <a
      href={url}
      type="button"
      className={`flex justify-center h-10 w-10 border-2 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 ${style}`}
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      {icon}
    </a>
  );
};

export default Icons;
