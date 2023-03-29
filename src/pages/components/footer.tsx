import { IconsLink } from "../../components/icons";
import Icons from "../../components/icons";
import React from "react";

const Footer = ({ introRef }: any) => {
  const {
    url: { facebook, github, linkedIn },
    style: { footer },
    icon: { facebookIcon, githubIcon, linkedInIcon },
  } = IconsLink;
  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-standard-white items-center text-standard-black flex flex-col justify-center pb-3 pt-2">
      <div className="container w-full">
        <div className="flex justify-center mb-2 md:mb-6">
          <button
            className="text-md font-semibold leading-6 flex items-center hover:underline"
            onClick={() => handleScroll(introRef)}
          >
            <div className="md:h-20 md:w-20 h-12 w-12 cursor-pointer bg-active bg-contain bg-no-repeat bg-center hover:bg-hover"></div>
          </button>
        </div>
        <div className="mb-2 flex justify-center space-x-4 md:space-x-6">
          <Icons url={facebook} style={footer} icon={facebookIcon} />
          <Icons url={github} style={footer} icon={githubIcon} />
          <Icons url={linkedIn} style={footer} icon={linkedInIcon} />
        </div>
      </div>

      <div className="select-none w-full flex items-center justify-center ">
        <span>© Joshua Husayan 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
