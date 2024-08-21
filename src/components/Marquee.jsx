import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.001" className=" w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px]  border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[18vw] leading-none font-bold pr-10  mb-4"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[18vw] leading-none font-bold pr-10  mb-4"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[18vw] leading-none font-bold pr-10  mb-4"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
