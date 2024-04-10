import React from "react";
import Navbar from "./components/Navbar";
import DefaultLayout from "./layout/DefaultLayout";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
