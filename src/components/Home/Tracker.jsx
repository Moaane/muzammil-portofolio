import React from "react";

export default function Tracker() {
  return (
    <div className="w-full max-w-[1440px] border grid grid-rows-3 grid-cols-1 md:grid-rows-1 lg:grid-cols-3 justify-between">
      <div className="py-6 gap-4 flex flex-col justify-center items-center ">
        <h1 className="font-extrabold text-7xl">2+</h1>
        <h1 className="uppercase font-semibold md:text-xs  lg:text-base xl:text-xl">
          years of experience
        </h1>
      </div>
      <div className="py-6 gap-4 flex flex-col justify-center items-center bg-black">
        <h1 className="font-extrabold text-7xl text-white">20+</h1>
        <h1 className="uppercase text-white font-semibold lg:text-base xl:text-xl">
          project completed
        </h1>
      </div>
      <div className="py-6 gap-4 flex flex-col justify-center items-center ">
        <h1 className="font-extrabold text-7xl">2+</h1>
        <h1 className="uppercase font-semibold lg:text-base xl:text-xl">years of experience</h1>
      </div>
    </div>
  );
}
