import React from "react";
import { Link } from "react-router-dom";

export default function PortofolioSection() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-6 md:gap-8 lg:gap-10">
      {/* Container utama */}

      {/* Bagian judul */}
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="font-bold text-4xl md:text-5xl font-sans text-center">
          Portofolio
        </h1>
        <h3 className="text-wrap text-lg md:tracking-wide md:text-xl font-bold font-sans uppercase text-center leading-relaxed">
          recognitions & accomplishment
        </h3>
      </div>

      {/* container content */}
      <div className="flex flex-col gap-24">

        {/* content */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:justify-between lg:gap-8 xl:gap-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="mx-auto bg-cover object-cover mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl lg:mt-0 link"
          />
          <div className="gap-4 md:gap-6 flex flex-col justify-between min-h-full py-6">
            <h1 className="uppercase text-white font-sans font-extrabold md:text-xl xl:text-2xl 2xl:text-3xl px-4 py-2 w-fit bg-orange">
              art direction
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-sans tracking-tight lg:tracking-normal leading-tight">
              Beautiful and anvanced website interfaces
            </h1>

            <Link
              to="/"
              className="font-semibold font-sans underline text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-orange"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-6 lg:justify-between lg:gap-8 xl:gap-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="mx-auto bg-cover object-cover mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl lg:mt-0 link"
          />
          <div className="gap-4 md:gap-6 flex flex-col justify-between min-h-full py-6">
            <h1 className="uppercase text-white font-sans font-extrabold md:text-xl xl:text-2xl 2xl:text-3xl px-4 py-2 w-fit bg-orange">
              art direction
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-sans tracking-tight lg:tracking-normal leading-tight">
              Beautiful and anvanced website interfaces
            </h1>

            <Link
              to="/"
              className="font-semibold font-sans underline text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-orange"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:justify-between lg:gap-8 xl:gap-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="mx-auto bg-cover object-cover mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl lg:mt-0 link"
          />
          <div className="gap-4 md:gap-6 flex flex-col justify-between min-h-full py-6">
            <h1 className="uppercase text-white font-sans font-extrabold md:text-xl xl:text-2xl 2xl:text-3xl px-4 py-2 w-fit bg-orange">
              art direction
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-sans tracking-tight lg:tracking-normal leading-tight">
              Beautiful and anvanced website interfaces
            </h1>

            <Link
              to="/"
              className="font-semibold font-sans underline text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-orange"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-6 lg:justify-between lg:gap-8 xl:gap-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="mx-auto bg-cover object-cover mt-0 shadow-lg w-full max-w-sm md:max-w-full md:max-h-fit lg:max-w-sm xl:max-w-xl 2xl:max-w-2xl lg:mt-0 link"
          />
          <div className="gap-4 md:gap-6 flex flex-col justify-between min-h-full py-6">
            <h1 className="uppercase text-white font-sans font-extrabold md:text-xl xl:text-2xl 2xl:text-3xl px-4 py-2 w-fit bg-orange">
              art direction
            </h1>

            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-sans tracking-tight lg:tracking-normal leading-tight">
              Beautiful and anvanced website interfaces
            </h1>

            <Link
              to="/"
              className="font-semibold font-sans underline text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-orange"
            >
              Read more
            </Link>
          </div>
        </div>

      
      </div>
    </div>
  );
}
