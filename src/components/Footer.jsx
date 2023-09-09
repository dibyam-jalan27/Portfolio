import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full  bg-[#6e07f3] pt-20 pb-16 text-[#e2cdfd]">
      <p className="text-3xl text-center font-medium cursor-pointer w-[450px]">
        Living, learning, & leveling up one day at a time.
      </p>
      <div className="flex flex-row space-x-5 pt-10">
        <a
          href="https://www.linkedin.com/in/dibyam-jalan-89b50b248/"
          target="_blank"
        >
          <button className="rounded-full hover:bg-white hover:border-white hover:text-[#6e07f3] text-white font-bold py-3 px-3 border-2 border-[#e2cdfd]">
            <BiLogoLinkedin className="text-3xl" />
          </button>
        </a>
        <a href="https://github.com/dibyam-jalan27" target="_blank">
          <button className="rounded-full hover:bg-white hover:border-white hover:text-[#6e07f3] text-white font-bold py-3 px-3 border-2 border-[#e2cdfd]">
            <FiGithub className="text-3xl" />
          </button>
        </a>
        <a href="https://leetcode.com/dibyam1jalan/" target="_blank">
          <button className="rounded-full hover:bg-white hover:border-white hover:text-[#6e07f3] text-white font-bold py-3 px-3 border-2 border-[#e2cdfd]">
            <SiLeetcode className="text-3xl" />
          </button>
        </a>
        <a href="mailto:dibyam1jalan@gmail.com">
          <button className="rounded-full hover:bg-white hover:border-white hover:text-[#6e07f3] text-white font-bold py-3 px-3 border-2 border-[#e2cdfd]">
            <AiOutlineMail className="text-3xl" />
          </button>
        </a>
      </div>
      <p className="text-xl pt-5 font-semibold">© 2023 Dibyam Jalan</p>
    </div>
  );
}
