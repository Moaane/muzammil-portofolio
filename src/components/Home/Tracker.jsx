import React from "react";

export default function Tracker() {
  return (
    <div className="w-full max-w-[1280px] border grid grid-cols-3 mx-24 justify-between">
      <div className="p-12 gap-4 flex flex-col justify-center items-center ">
        <h1 className="text-7xl">2+</h1>
        <h1 className="uppercase font-semibold text-xl">years of experience</h1>
      </div>
      <div className="p-12 gap-4 flex flex-col justify-center items-center bg-black">
        <h1 className="text-7xl text-white">20+</h1>
        <h1 className="uppercase text-white font-semibold text-xl">project completed</h1>
      </div>
      <div className="p-12 gap-4 flex flex-col justify-center items-center ">
        <h1 className="text-7xl">2+</h1>
        <h1 className="uppercase font-semibold text-xl">years of experience</h1>
      </div>
    </div>
  );
}
