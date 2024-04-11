import React from "react";

export default function Footer() {
  return (
    <footer className="w-screen font-sans text-white gap-8 bg-black flex flex-col justify-center items-center pt-12 pb-8">
      <div className="w-full lg:max-w-[1440px] md:px-8 lg:px-24 xl:px-0">
        <div className="flex flex-col md:flex-row md:min-w-full md:justify-end items-center gap-6 font-bold">
          <h1>Style Guide</h1>
          <h1>License</h1>
          <h1>Changelog</h1>
        </div>
        <p className="text-xs md:text-sm font-medium">
          Made by Muhammad Muzammil Alvaro
        </p>
      </div>
    </footer>
  );
}
