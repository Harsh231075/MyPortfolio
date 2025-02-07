import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>

  );
}

export default App;
