import { motion } from "framer-motion";
import React from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8"
      className="w-full min-h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-32 md:mt-40 lg:mt-45 px-6 md:px-10 lg:px-20">
        {["We Create", "Eye Opening", "operations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[18vw] sm:w-[14vw] md:w-[11vw] lg:w-[8vw] mr-[2vw] lg:mr-[1vw] h-[12vw] sm:h-[9vw] md:h-[7vw] lg:h-[5.7vw] relative top-[1.5vw] lg:top-[1vw] bg-green-500 rounded-md"
                  ></motion.div>
                )}
                <h1 className="flex items-center uppercase leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[7vw] text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] tracking-wider font-founders font-black">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[4px] py-5 px-6 md:px-10 lg:px-20 border-zinc-800 mt-12 md:mt-16 lg:mt-20 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map((item, index) => (
            <p
              key={index}
              className="text-sm md:text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="start flex flex-wrap items-center gap-4 md:gap-5">
          <div className="border-[2px] uppercase border-zinc-500 font-light text-sm md:text-md py-2 px-5 rounded-full">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <HiOutlineArrowSmUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;