import React from "react";
import Navbar from "../components/Navbar";
import DefaultLayout from "../layout/DefaultLayout";
import HeroSection from "../components/Home/HeroSection";

export default function About() {
  return (
    <div className="relative bg-orange">
      <Navbar />
      <DefaultLayout>
        <HeroSection />
      </DefaultLayout>
      <div className="h-[100vh] w-screen"></div>
    </div>
  );
}
