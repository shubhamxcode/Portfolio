import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Image from "next/image";

const Startup = (props) => {
  let WidthBy2 = 0;
  let HeightBy2 = 0;
  let greaterThanSmall = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      WidthBy2 = window.innerWidth / 2 - 48 - 20;
      HeightBy2 = window.innerHeight / 2 - 44;
      greaterThanSmall = true;
    } else {
      WidthBy2 = window.innerWidth / 2 - 28;
      HeightBy2 = window.innerHeight / 2 - 40;
    }

    console.log("width by 2: ", WidthBy2);
  }

  return (
    <motion.div 
      initial={{opacity:1}}
      animate={{opacity:0}}
      transition={{opacity:{delay:4.9,duration:0}}}
      className="absolute h-full w-full flex justify-center items-center bg-StartupBackground">
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
        animate={{ opacity: [1, 0, 1], x: -WidthBy2, y: -HeightBy2, scale: greaterThanSmall ? "57%" : "50%" }}
        transition={{
          opacity: { delay: 3, duration: 1.5 },
          x: { duration: 0.5, delay: 4.5 },
          y: { duration: 0.5, delay: 4.5 },
          scale: { duration: 0.5, delay: 4.5 },
        }}
        className="relative h-24 w-24 flex justify-center items-center"
      >
        {/* Animated entrance for the web logo */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{
            scale: { duration: 2, delay: 0.5 },
            rotate: { duration: 2, delay: 0.5 },
          }}
          className="absolute flex justify-center items-center"
        >
          <Image
            src="/web logo.svg"
            alt="Shubham Varshney Logo"
            width={96}
            height={96}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        {/* Optional: Add some animated elements around the logo for visual appeal */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
          transition={{
            duration: 3,
            delay: 2,
          }}
          className="absolute w-32 h-32 border-2 border-AAsecondary rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Startup;
