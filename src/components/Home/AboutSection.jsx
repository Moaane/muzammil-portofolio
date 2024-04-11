import React from "react";

export default function AboutSection() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-2 md:gap-6 lg:space-x-2 ">
      <div className="flex flex-col lg:w-1/2 gap-2 md:gap-6 lg:justify-between">
        <h1 className="uppercase font-sans font-bold text-xl md:text-2xl">
          muzammil alvaro
        </h1>

        <h1 className="font-bold md:font-extrabold text-3xl md:text-5xl lg:text-5xl xl:text-6xl tracking-wider">
          Lead product designer and art director.
        </h1>
      </div>

      <div className="flex lg:w-2/3 flex-col gap-2 md:gap-6">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </h1>

        <h1 className="font-medium text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>

    </div>
  );
}
