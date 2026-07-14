import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 ">
        {["We Create ", "Eye Opening", "operations"].map((item, index) => {
          return (
            <div className="masker ">
              <h1 className='  uppercase  leading-[6vw] text-[7.5vw] tracking-tighter font-["Founders Grotesk"] font-medium'>
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[4px] py-5 px-20 border-zinc-800 mt-32 flex  items-center justify-between">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ]
        .map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start">
          <div className="border-[2px]  border-zinc-500 font-light text-xs  py-2 px-5 rounded-full   ">
            Start the Project
          </div>
          <div className="w-3 h-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
