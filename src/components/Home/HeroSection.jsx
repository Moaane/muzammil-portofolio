import React from "react";
import profileImg from "../../assets/profile.png"
export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center justify-between lg:flex-row  lg:py-8 lg:space-y-0 max-w-[1440px] space-y-6 md:space-y-12 hero ">
      <div className="flex flex-col space-y-4 md:space-y-8 text-dark w-full">
        <div className="font-extrabold text-3xl md:text-5xl lg:text-4xl xl:text-5xl duration-300">
          <h1 className="text-neutral-content">
            HI, I'M MUZAMMIL.
            <span className="block md:leading-relaxed text-primary">
              A WEB DEVELOPER
            </span>
            BASED IN <del>INDONESIA</del>
          </h1>
        </div>
        <div className="flex flex-wrap space-x-5 ">
          <p className="font-bold text-black text-sm md:text-2xl hover:text-orange">
            DESIGN
          </p>
          <p className="font-bold text-black text-sm md:text-2xl hover:text-orange">
            DEVELOPMENT
          </p>
          <p className="font-bold text-black text-sm md:text-2xl hover:text-orange">
            WEBFLOW
          </p>
        </div>
        <div className="flex flex-col items-center md:w-fit md:flex-row md:space-y-0 space-y-2 group">
          <a
            href="https://www.wa.link/3yyvsl"
            target="_blank"
            className="btn bg-black text-white w-full md:btn-wide border-none rounded-none group-hover:bg-primary transition-all ease-in-out duration-300 xl:text-lg xl:w-72 xl:h-14"
          >
            Got a project?
          </a>
          <a
            href="https://www.wa.link/3yyvsl"
            target="_blank"
            className="btn font-bold w-full md:w-fit border-2 rounded-none xl:h-14 xl:text-lg group-hover:text-primary transition-all ease-in-out duration-300"
          >
            Let's talk.
          </a>
        </div>
      </div>
      <img
        src={profileImg}
        alt="Gambar Hero"
        className="mx-auto mt-0 rounded-full shadow-xl drop-shadow-lg w-full h-80 md:h-full max-w-xs bg-primary object-cover z-0 filter grayscale hover:filter-none transition-all ease-in-out duration-300 md:max-w-lg lg:max-w-sm xl:max-w-md lg:mt-0"
      />
    </div>
  );
}
