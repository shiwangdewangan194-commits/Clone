import React from "react";

const About = () => {
  return (
    <div className="w-full  p-20 bg-[#CDEA68] rounded-3xl text-black">
      <h1 className=" mb-15 font-['Neue Montreal'] text-[4vw] leading-[5vw] tracking-tight ">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      <div className="w-ful flex gap-5 border-t-[2px]  border-[#60770d] ">
        <div className="w-1/2 ">
          <h1 className="text-6xl mt-20">Our Approach</h1>
          <button className="flex gap-10 uppercase items-center mt-10 bg-zinc-900 text-white px-10 py-6 rounded-full">
            Read More
            <div className="w-4 h-4 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 rounded-3xl h-[70vh] mt-10 bg-red-500">
         </div>
      </div>
    </div>
  );
};

export default About;
