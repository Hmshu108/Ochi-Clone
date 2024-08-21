import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";

function Feature() {
  const cards = [useAnimation(), useAnimation()];

  const HandleHover = (index) => {
    cards[index].start({ y: 0 });
  };

  const HandleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20  ">
        <h1 className='text-8xl font-["Neue_Montreal"]'>Featured Project</h1>
      </div>

      <div className="px-20 ">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => HandleHover(0)}
            onHoverEnd={() => HandleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]  "
          >
            <h1 className="absolute flex overflow-hidden   left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-6xl leading-none tracking-tighter ">
              {"FYDE".split(" ").map((item, idx) => {
                return (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.8 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                );
              })}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => HandleHover(1)}
            onHoverEnd={() => HandleHoverEnd(1)}
            className="cardcontainer  relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-6xl leading-none tracking-tighter ">
              {"VISE".split(" ").map((item, idx) => {
                return (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.8 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                );
              })}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
