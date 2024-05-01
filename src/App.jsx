import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./common/Intro";
import AnimatedCursor from "react-animated-cursor";
import { isMobile, isDesktop } from "react-device-detect";


export default function App() {
  return (
    <Intro>
      {isDesktop && (
        <AnimatedCursor
          outerSize={0}
          innerSize={70}
          showSystemCursor={false}
          innerScale={2}
          innerStyle={{
            accentColor: "255, 0, 0",
            mixBlendMode: "exclusion",
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
        />
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Intro>
  );
}
