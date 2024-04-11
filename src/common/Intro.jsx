import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro({ children }) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({ repeat: 0 }); // Mengaktifkan kembali pengguliran setelah animasi selesai
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
      {children}
    </div>
  );
}
