import React from "react";
import {motion} from "framer-motion"

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-3xl bg-[#004D43]">
      <div className="gap-10 border-t-2 border-b-2 leading-none  border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <h1 className="font-founders font-semibold leading-none  text-[22vw]  
        mb-10  uppercase">We Are ochi</h1>
        <h1 className="font-founders font-semibold leading-none  text-[22vw]  
        mb-10  uppercase">We Are ochi</h1> 
      </div>
    </div>
  );
};

export default Marquee;
