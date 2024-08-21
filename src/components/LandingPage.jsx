import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section   data-scroll-speed='-1' className="w-full h-screen  bg-zinc-900 text-white">
      <div className="textstructure mt-28 px-20">
        {["We create", "Eye-Opening", "Presentations"].map((item, idx) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-center">
                {idx === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }}
                    className="mr-[1vw] rounded-md w-[9vw] h-[5vw] bg-green-500 relative top-1"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-medium ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md tracking-tight font-light leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center  gap-3">
          <div className="px-5 py-2 border-[1px] border-zinc-300 font-light text-md uppercase rounded-full hover:bg-zinc-200 hover:text-black hover:border-zinc-900  transform transition-all ease-linear">
            <p>Start the project</p>
          </div>
          <div className="w-8 h-8  rounded-full border-[1px] border-zinc-300 grid place-items-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
