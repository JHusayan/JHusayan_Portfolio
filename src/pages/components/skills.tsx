import { RefProps } from "../Interface";
import CodingPic from "../../assets/images/coding.jpg";
import ProgressBar from "../../components/progress";
import React from "react";
import Title from "../../components/title";
import Reveal from "../../components/reveal";
import { useRevealOnce } from "../../hooks/useRevealOnce";

const skills = [
  { name: "HTML", percent: 85 },
  { name: "CSS", percent: 80 },
  { name: "JAVASCRIPT", percent: 75 },
  { name: "TYPESCRIPT", percent: 75 },
  { name: "REACTJS", percent: 75 },
  { name: "ANGULAR", percent: 85 },
  { name: "SQLITE", percent: 80 },
  { name: "SPRINGBOOT", percent: 75 },
  { name: "JAVA", percent: 75 },
  { name: "MYSQL", percent: 75 },
  { name: "GIT", percent: 75 },
];

const Skills = ({ skillsRef }: RefProps) => {
  const show = useRevealOnce(skillsRef);

  return (
    <div
      className="bg-standard-black w-full min-h-screen snap-start pt-24 md:pt-32 box-border text-standard-white flex flex-col justify-center px-[10%] pb-8 items-center"
      ref={skillsRef}
    >
      <Reveal show={show}>
        <Title>Skills</Title>
      </Reveal>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 p-5">
        {skills.map(({ name, percent }, i) => (
          <Reveal key={name} show={show} direction="left" delay={150 + i * 40}>
            <div className="space-y-3">
              <div className="text-base font-medium select-none">{name}</div>
              <ProgressBar progressPercent={percent} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Skills;