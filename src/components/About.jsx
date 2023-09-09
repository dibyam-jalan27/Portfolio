import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <div className="bg-[#6e07f3] flex flex-col items-center h-[34rem]">
      <h1 className="text-3xl font-bold text-white pt-[6rem] pb-[1rem] lg:pt-[10rem]">
        Hi,I'm Dibyam. Nice to meet you.
      </h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-white text-2xl font-semibold px-[2.4rem] py-[2.4rem] w-[50rem] lg:w-[60rem] xl:w-[70rem] text-center">
          "I'm a full-stack developer specializing in Java and the MERN stack.
          Competitive programming enthusiast with a passion for problem-solving.
          Committed to crafting efficient solutions and staying updated on tech
          trends. Let's code and innovate together!"
        </p>
      </div>
      <div className="p-3">
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          download="Dibyam Jalan Resume"
        >
          <button className="bg-white text-[22px] flex  text-indigo-400 px-5 py-3 rounded-full hover:text-white hover:bg-[#9893da]">
            Resume
            <BiLinkExternal className="ml-2 h-8 w-8" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
