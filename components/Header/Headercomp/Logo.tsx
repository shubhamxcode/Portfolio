import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Image from "next/image";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        className="relative h-12 w-12 flex justify-center items-center"
      >
        <Image
          src="/web logo.svg"
          alt="Shubham Varshney Logo"
          width={48}
          height={48}
          className="hover:scale-110 transition-transform duration-300"
        />
      </motion.div>
    </>
  );
}
