import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row lg:py-8 lg:space-y-0 max-w-[1440px] px-4 md:px-8 lg:px-24 space-y-6 md:space-y-12 hero">
        <div className="flex flex-col space-y-4 md:space-y-8 text-neutral w-full">
          <div className="font-bold text-3xl md:text-5xl lg:text-3xl xl:text-5xl">
            <h1>
              HI, I'M MUZAMMIL.
              <span className="block md:leading-relaxed">A WEB DEVELOPER</span>
              BASED IN INDONESIA
            </h1>
          </div>
          <div className="flex flex-wrap space-x-5">
            <h1 className="font-bold text-black text-sm md:text-2xl">DESIGN</h1>
            <h1 className="font-bold text-black text-sm md:text-2xl">DEVELOPMENT</h1>
            <h1 className="font-bold text-black text-sm md:text-2xl">WEBFLOW</h1>
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-2 md:space-y-0 space-y-2">
            <button className="btn bg-black text-white w-full md:btn-wide hover:bg-black hover:text-orange border-none">Got a project?</button>
            <button className="btn w-full md:w-fit hover:text-orange">Let's talk.</button>
          </div>
        </div>
        <img
          src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczkzLXBhLTU3OThfMS5wbmc.png"
          alt="Gambar Hero"
          className="mx-auto mt-0 rounded-full shadow-lg w-full max-w-xs md:max-w-lg lg:max-w-sm xl:max-w-md lg:mt-0"
        />
      </div>
    </>
  );
}
