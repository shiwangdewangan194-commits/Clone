import React from "react";

const About = () => {
  return (
    <div className="w-full p-6 md:p-10 lg:p-20 bg-[#CDEA68] rounded-3xl text-black">
      <h1 className="mb-8 md:mb-15 font-['Neue Montreal'] text-[6.5vw] md:text-[4vw] leading-[7.5vw] md:leading-[5vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      
      <div className="w-full flex flex-col md:flex-row gap-5 border-t-[2px] border-[#60770d] pt-8 md:pt-0">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl mt-8 md:mt-20">Our Approach</h1>
          <button className="flex gap-10 uppercase items-center mt-8 md:mt-10 bg-zinc-900 text-white px-8 md:px-10 py-5 md:py-6 rounded-full text-sm md:text-base">
            Read More
            <div className="w-4 h-4 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        
        <div className="w-full md:w-1/2 rounded-3xl h-[50vh] md:h-[70vh] mt-6 md:mt-10 bg-red-500">
        </div>
      </div>
    </div>
  );
};

export default About;