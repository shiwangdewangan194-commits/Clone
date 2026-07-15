import React from "react";

const Cards = () => {
  return (
    <div className="h-screen w-full bg-zinc-100 gap-5 flex items-center px-32">
      <div className=" container w-1/2 h-[50vh] ">
        <div className="w-full relative h-full  rounded-xl flex items-center justify-center bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2  left-10 bottom-10 ">
            {" "}
            Hey
          </button>
        </div>
      </div>
      <div className=" container gap-5 flex w-1/2 h-[50vh] ">
        <div className="w-1/2 flex items-center justify-center  h-full rounded-xl relative bg-[#132321]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2  left-10 bottom-10 ">
            {" "}
            Hey
          </button>
        </div>
        <div className="w-1/2 relative items-center justify-center flex h-full rounded-xl  bg-[#0f201e]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2  left-10 bottom-10 ">
            {" "}
            Hey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
