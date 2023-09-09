import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-14">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="text-4xl font-bold text-indigo-600"
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "Competitive Programmer",
            "Electronics and Communication Engineer",
            "Tech Enthusiast",
          ]}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          loop={true}
        />
      </motion.div>
      <h1 className="pt-10 text-3xl font-semibold">
        Trust me I am an Engineer.
      </h1>
      <div className="pt-10 flex-col flex items-center">
        <img
          className="h-80 w-80"
          src="https://mattfarley.ca/img/mf-avatar.svg"
        />
      </div>
      <div className="pt-[8rem] lg:w-[67rem]">
        <img src="https://mattfarley.ca/img/hero-devices.svg" />
      </div>
    </div>
  );
}
