import React from "react";

const Features = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-8xl font-founders tracking-wide font-medium">
          Featured Projects{" "}
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
         
          <div className="card w-1/2  relative h-[70vh]  ">
          <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 bg-amber-500 z-[9] text-8xl leading-none font-founders font-semibold tracking-wider">
               {"FYDE".split('').map((item,index)=><span>{item}</span>)}
          </h1>
          <div  className=" rounded-xl  w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
          </div>
          </div>
          <div className="card w-1/2  relative h-[70vh] ">
           <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 bg-amber-500 z-[9] text-8xl leading-none font-founders font-semibold tracking-wider">
            {"VYSE".split('').map((item,index)=><span>{item}</span>)}
          </h1>
          <div  className="bg-green-600 rounded-xl  w-full h-full overflow-hidden">
             <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
