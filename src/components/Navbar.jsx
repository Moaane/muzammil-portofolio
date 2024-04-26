import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  
  return (
    <div className="fixed w-screen h-[8vh] top-0 md:h-[8vh] lg:h-[10vh] flex justify-center bg-white">
      
      {/* Mobile Navbar */}
      <div className="navbar-center h-full w-screen flex lg:hidden items-center justify-between px-4 md:px-8">
        <a className="text-xl md:text-2xl font-extrabold">MILL</a>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-center h-full lg:w-full hidden lg:flex lg:max-w-[1440px] md:px-24 2xl:px-0 justify-between items-center">
        <a className="text-2xl font-extrabold">MILL</a>
        {/* <ul className="menu menu-horizontal gap-4">
          <li>
            <Link to="/" className="font-semibold text-neutral text-base hover:text-orange hover:scale-105">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-semibold text-neutral text-base hover:text-orange hover:scale-105">
              About
            </Link>
          </li>
          <li>
            <a className="font-semibold text-neutral text-base hover:text-orange hover:scale-105">
              Works
            </a>
          </li>
          <li>
            <a className="font-semibold text-neutral text-base hover:text-orange hover:scale-105">
              Contact
            </a>
          </li>
        </ul> */}
        {/* <a className="btn btn-outline hidden md:flex px-8 rounded-none border-2 font-bold hover:border-2 hover:border-orange hover:scale-105 hover:text-orange">
          Let's talk
        </a> */}
      </div>
    </div>
  );
}
