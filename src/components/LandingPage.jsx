import { motion } from "framer-motion";
import React from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const LandingPage = () => {

 

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8 " className="w-full h-screen  bg-zinc-900 pt-1">
      <div className="textstructure mt-45 px-20 ">
        {["We Create ", "Eye Opening", "operations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex">
                {[
                  index == 1 && (
                    <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={ {ease:[0.76,0,0.24,1],duration:1} }  className="w-[8vw] mr-[1vw] h-[5.7vw] relative top-[1vw] bg-green-500"></ motion.div>
                  ),
                ]}
                <h1 className='  flex items-center uppercase  leading-[7vw] text-[9vw] tracking-wider font-founders font-black'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[4px] py-5 px-20 border-zinc-800 mt-20 flex  items-center justify-between">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="border-[2px] uppercase  border-zinc-500 font-light text-md  py-2 px-5 rounded-full   ">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px]  border-zinc-500 rounded-full">
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
