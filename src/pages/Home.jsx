import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import DefaultLayout from "../layout/DefaultLayout";
import HeroSection from "../components/Home/HeroSection";
import { useEffect } from "react";
import AboutSection from "../components/Home/AboutSection";
import Tracker from "../components/Home/Tracker";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline(); // Mengaktifkan kembali pengguliran setelah animasi selesai
      t1.from("#intro-slider", {
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="relative overflow-hidden bg-white" ref={comp}>
      <div
        id="intro-slider"
        className="h-[500vh]  w-screen p-10 bg-white fixed top-0 left-0 font-sans font-semibold z-10 flex flex-col gap-4 md:gap-10 tracking-tight"
      >
        <h1 className="text-5xl md:text-7xl lg:text-9xl" id="title-1">
          Web Developer
        </h1>
        <h1 className="text-5xl  md:text-7xl lg:text-9xl" id="title-2">
          UI UX Designer
        </h1>
        <h1 className="text-5xl  md:text-7xl lg:text-9xl" id="title-3">
          UwU
        </h1>
      </div>

      <Navbar />
      <DefaultLayout>
        <HeroSection />
        <AboutSection />
        <Tracker />
      </DefaultLayout>
      <div className="h-screen"></div>
    </div>
  );
};

export default App;
