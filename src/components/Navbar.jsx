import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useState } from "react";

export default function Navbar() {
  
  
  return (
    <div className="navbar-center w-screen h-[10vh] flex justify-center bg-white">
      
      {/* Mobile Navbar */}
      <div className="navbar-center w-screen h-full flex lg:hidden items-center justify-between px-4 md:px-8">
        <a className="text-xl font-bold">MILL</a>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-center h-full w-screen hidden lg:flex lg:max-w-[1440px] justify-between px-24 items-center ">
        <a className="text-xl font-bold">MILL</a>
        <ul className="menu menu-horizontal">
          <li>
            <a className="font-semibold text-neutral text-base hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a className="font-semibold text-neutral text-base hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a className="font-semibold text-neutral text-base hover:text-primary">
              Works
            </a>
          </li>
          <li>
            <a className="font-semibold text-neutral text-base hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
        <a className="btn btn-outline hidden md:flex px-8 rounded-none font-bold hover:border hover:border-primary hover:text-primary">
          Let's talk
        </a>
      </div>
    </div>
  );
}
