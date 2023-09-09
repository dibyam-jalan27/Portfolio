import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
      >
        <h3 className="capitalize font-bold text-lg lg:text-2xl">{type}</h3>
        <span className="capitaize font-semibold text-indigo-600/75">
          {time} | {place}
        </span>
        <p className="font-medium text-sm lg:text-md w-full">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="flex flex-col items-center pb-32 w-full">
      <h2 className="pt-20 text-5xl font-bold text-indigo-900 mb-20">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-indigo-800 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Technology in Electronics and Communication Engineering"
            time="2021-2025"
            place="SVNIT Surat"
            info="Completed a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE) at SVNIT Surat, emphasizing a strong foundation in cutting-edge technology and problem-solving skills."
          />
          <Details
            type="DSA and Full Stack Development"
            time="2022-2023"
            place="AlgoUniversity, Remote"
            info="Gained proficiency in Data Structures and Algorithms (DSA) and Full Stack Development through an extensive course at AlgoUniversity, successfully solving over 180 complex problems."
          />
          <Details
            type="Deep Learning"
            time="2023-2023"
            place="Coursera, Remote"
            info="Successfully completed a Deep Learning course by Andrew Ng on the Coursera platform, acquiring expertise in advanced neural network techniques and applications."
          />
          <Details
            type="Android App Development using Java"
            time="2022-2022"
            place="Udemy, Remote"
            info="Completed an Android app development course using Java on Udemy, provided by Oak Academy, mastering the fundamentals of Android application development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
