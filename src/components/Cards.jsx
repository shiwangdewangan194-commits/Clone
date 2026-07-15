import React from "react";

const Cards = () => {
  return (
    <div className="min-h-screen md:h-screen w-full bg-zinc-100 gap-5 flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-32 py-10 md:py-0">
      
      {/* First Big Card */}
      <div className="container w-full md:w-1/2 h-[50vh] md:h-[50vh]">
        <div className="w-full relative h-full rounded-xl flex items-center justify-center bg-[#004D43]">
          <img
            className="w-24 md:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-6 md:left-10 bottom-6 md:bottom-10 text-sm md:text-base">
            Hey
          </button>
        </div>
      </div>

      {/* Two Small Cards */}
      <div className="container w-full md:w-1/2 h-[50vh] flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 flex items-center justify-center h-full rounded-xl relative bg-[#132321]">
          <img
            className="w-24 md:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-6 md:left-10 bottom-6 md:bottom-10 text-sm md:text-base">
            Hey
          </button>
        </div>
        
        <div className="w-full md:w-1/2 relative flex items-center justify-center h-full rounded-xl bg-[#0f201e]">
          <img
            className="w-24 md:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-6 md:left-10 bottom-6 md:bottom-10 text-sm md:text-base">
            Hey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;