// import { } from "framer-;
import React from "react";

const Features = () => {
  return (
    <div className="w-full py-10 md:py-20">
      <div className="w-full px-6 md:px-20 border-b-[1px] pb-10 md:pb-20 border-zinc-700">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-founders tracking-wide font-medium">
          Featured Projects{" "}
        </h1>
      </div>
      
      <div className="px-6 md:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-8 md:gap-10 mt-8 md:mt-10">
          
          {/* First Card */}
          <div className="card w-full md:w-1/2 relative h-[55vh] md:h-[70vh]">
            <h1 className="absolute left-1/2 md:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 bg-amber-500 z-[9] text-6xl md:text-7xl lg:text-8xl leading-none font-founders font-semibold tracking-wider">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="card w-full md:w-1/2 relative h-[55vh] md:h-[70vh]">
            <h1 className="absolute right-1/2 md:right-full translate-x-1/2 top-1/2 -translate-y-1/2 bg-amber-500 z-[9] text-6xl md:text-7xl lg:text-8xl leading-none font-founders font-semibold tracking-wider">
              {"VYSE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="bg-green-600 rounded-xl w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;