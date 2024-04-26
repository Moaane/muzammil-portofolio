import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Intro from "./common/Intro";
import AnimCursor from "./components/AnimCursor";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <Intro>
      <AnimatedCursor
        outerSize={0}
        innerSize={70}
        showSystemCursor={false}
        innerScale={2}
        innerStyle={{
          accentColor: "255, 0, 0",
          mixBlendMode: "exclusion"
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      ></AnimatedCursor>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Intro>
  );
}
