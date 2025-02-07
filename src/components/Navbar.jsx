import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* CV Link on Left Side */}
        <Link
          to="/Resume.pdf"
          target="Resume.pdf"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Download CV
        </Link>

        {/* Icons on Right Side */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/harsh-singh-baghel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/harsh231075"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
