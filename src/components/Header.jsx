import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="w-full px-[2.4rem] py-[2.4rem] flex flex-row items-center text-center justify-between t-0">
        <motion.button
          initial={{
            opacity: 0,
            x: -500,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <img
            className="h-20 w-20 rounded-full "
            src="https://www.starpng.com/public/uploads/preview/dj-logo-dj-tatto-dj-soud-logo-dj-music-png-1024x1024-1015764122728kbgrmhxb1.png"
          />
        </motion.button>
        <a href="mailto:dibyam1jalan@gmail.com">
          <motion.button
            initial={{
              opacity: 0,
              x: 500,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-[22px] border-2 border-indigo-400 text-indigo-400 px-5 py-3 rounded-full hover:text-white hover:bg-indigo-400"
          >
            Say Hello!
          </motion.button>
        </a>
      </div>
    </header>
  );
};

export default Header;
