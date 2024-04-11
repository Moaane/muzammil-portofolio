import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center justify-between lg:flex-row lg:py-8 lg:space-y-0 max-w-[1440px] space-y-6 md:space-y-12 hero ">
      <div className="flex flex-col space-y-4 md:space-y-8 text-neutral w-full">
        <div className="font-extrabold text-3xl md:text-5xl lg:text-4xl xl:text-5xl">
          <h1>
            HI,
            <a className="hover:text-orange duration-300">I'M MUZAMMIL.</a>
            <span className="block md:leading-relaxed text-orange">A WEB DEVELOPER</span>
            BASED IN <del>INDONESIA</del>
          </h1>
        </div>
        <div className="flex flex-wrap space-x-5 ">
          <a className="font-bold text-black text-sm md:text-2xl hover:text-orange">
            DESIGN
          </a>
          <a className="font-bold text-black text-sm md:text-2xl hover:text-orange">
            DEVELOPMENT
          </a>
          <a className="font-bold text-black text-sm md:text-2xl hover:text-orange">
            WEBFLOW
          </a>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-y-0 space-y-2">
          <button className="btn bg-black text-white w-full md:btn-wide border-none rounded-none hover:bg-black">
            Got a project?
          </button>
          <button className="btn font-bold w-full md:w-fit border-2 rounded-none">
            Let's talk.
          </button>
        </div>
      </div>
      <img
        src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczkzLXBhLTU3OThfMS5wbmc.png"
        alt="Gambar Hero"
        className="mx-auto mt-0 rounded-full shadow-lg w-full max-w-xs md:max-w-lg lg:max-w-sm xl:max-w-md lg:mt-0"
      />
    </div>
  );
}
