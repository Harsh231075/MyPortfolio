import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('myphoto.jpg')", // Replace with your image path
      }}
    >
      {/* Hero Content */}
      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center text-white text-center bg-opacity-50 px-4"
        style={{ marginBottom: "5vh" }}
      >
        {/* Typing Animation for Name */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          <Typewriter
            options={{
              strings: ["Hi, it's me Harsh"], // Replace "Harsh" with your name
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          I am a professional web developer
        </p>

        {/* About Me Button */}
        <Link
          to="/about"
          className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-300"
        >
          About Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
