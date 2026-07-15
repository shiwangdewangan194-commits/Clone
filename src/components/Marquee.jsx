import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className="w-full py-20 rounded-3xl bg-[#004D43]">
      <div className="border-y-2 border-zinc-300 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <h1
              key={i}
              className="  mb-10 shrink-0 px-5 font-founders font-semibold text-[22vw] leading-none uppercase"
            >
              WE ARE OCHI
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;