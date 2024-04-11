import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Intro from "./common/Intro";
import AnimCursor from "./components/AnimCursor";

export default function App() {
  return (
    <Intro>
      <AnimCursor>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </AnimCursor>
    </Intro>
  );
}
