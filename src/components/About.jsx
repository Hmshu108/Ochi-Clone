  import { motion } from "framer-motion";
import React from "react";
  import { GoArrowUpRight } from "react-icons/go";

  function About() {
    
    return (
      <div data-scroll data-scroll-section data-scroll-speed=".01" className="w-full  px-20 bg-[#CDEA68] py-20 rounded-tr-3xl rounded-tl-3xl text-black">
        <div className="  border-b-2 border-zinc-400">
          <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] mb-24">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
            ideas, and hire great peo­ple.
          </h1>
        </div>

        <div className="flex justify-between py-2  mt-16   text-base border-b-2 border-zinc-400 ">
          <div className="w-[50%]">What you can expect:</div>
          <div className="w-[50%] flex flex-col gap-4 mb-24">
            <h1 className="w-[45%] ">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </h1>
            <h1 className="w-[45%] ">
              We believe the mix of strategy and design (with a bit of coffee) is
              what makes your message clear, convincing, and captivating.
            </h1>
          </div>
        </div>

        <div className="w-full pt-10 flex gap-5">
          <div className="w-1/2">
            <h1 className="text-4xl">Our approach:</h1>
            <button className="px-6 py-4 mt-6 bg-zinc-900 rounded-full flex gap-5 uppercase items-center justify-between text-white text-lg">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full transform transition-all duration-300 hover:w-6 hover:h-6 hover:bg-transparent hover:border-2 hover:border-zinc-100 hover:grid hover:place-items-center">
                <GoArrowUpRight className=" opacity-0 transform transition-all duration-300 hover:opacity-100 " />
              </div>
            </button>
          </div>

          <div className="w-1/2   rounded-3xl ">
            <img
              className="rounded-3xl"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }

  export default About;
