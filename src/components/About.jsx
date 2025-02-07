import React from "react";
import { GraduationCap, School, BookOpen, ArrowDown, Code, Youtube, Terminal, Globe, Database, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center flex items-end justify-center px-4"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        {/* <div className="text-center z-10 absolute top-[20px] mb-16">
          <h1 className="text-4xl md:text-4xl font-bold mb-1 text-indigo-400 hover:scale-105 transition-transform">Harsh singh baghel</h1>
          <p className="text-sm md:text-lg opacity-80">Passionate Learner & Future Professional</p>
        </div> */}

        {/* Circular Profile Image */}
        <div className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 w-48 md:w-28 h-48 md:h-28 rounded-full border-4 border-gray-300 overflow-hidden shadow-xl">
          <img src="iam.jpeg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* About Summary */}
      <div className="container mx-auto px-4 py-12 mt-8 text-center">
        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl mx-auto">
          Hey there! I'm <span className="text-indigo-400 font-semibold">Harsh Singh Baghel</span>, a passionate web developer from <span className="text-indigo-400 font-semibold">Indore, India</span>. Currently, I'm in my <span className="text-indigo-400 font-semibold">3rd semester of BTech</span> in <span className="text-indigo-400 font-semibold">CSE</span>.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl mx-auto mt-4">
          I specialize in <span className="text-indigo-400 font-semibold">JavaScript, React.js, and Backend Development</span>. My focus is on building interactive and high-performance web applications. I enjoy solving problems and learning new technologies to stay ahead in the tech industry.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl mx-auto mt-4">
          Apart from coding, I love exploring UI/UX design, optimizing web performance, and contributing to open-source projects. I'm always excited to collaborate and build something innovative!
        </p>
      </div>

      {/* Education Journey Timeline */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-10">My Education Journey</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col space-y-16">
            {/* High School */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 md:left-1/2 top-8 h-full w-1 bg-indigo-500/30"></div>
              {/* Horizontal Line */}
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg">
                  <School className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-indigo-400">High School (10th)</h3>
                  <p className="text-gray-300">Tagore public H.S School</p>
                  <p className="text-gray-400 text-sm mt-1">Scored: 95%</p>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 md:left-1/2 top-8 h-full w-1 bg-indigo-500/30"></div>
              {/* Horizontal Line */}
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-indigo-400">Intermediate (12th)</h3>
                  <p className="text-gray-300">Tagore public H.S School</p>
                  <p className="text-gray-400 text-sm mt-1">Scored: 92%</p>
                </div>
              </div>
            </div>

            {/* BTech */}
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-indigo-400">Bachelor's in Technology</h3>
                  <p className="text-gray-300">RGPV University</p>
                  <p className="text-gray-400 text-sm mt-1">Current CGPA: 8.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Journey Section */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-10">My Tech Journey</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col space-y-16">
            {/* C Programming */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-8 md:left-1/2 top-8 h-full w-1 bg-indigo-500/30"></div>
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center group">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-semibold text-indigo-400">C Programming</h3>
                  <p className="text-gray-400 text-sm mb-2">First Step into Programming</p>
                  <p className="text-gray-300">Started with C programming through college curriculum and YouTube tutorials.</p>
                </div>
              </div>
            </div>

            {/* C++ */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-8 md:left-1/2 top-8 h-full w-1 bg-indigo-500/30"></div>
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center group">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-semibold text-indigo-400">C++</h3>
                  <p className="text-gray-400 text-sm mb-2">Object-Oriented Programming</p>
                  <p className="text-gray-300">Advanced to C++ through college courses and YouTube channels.</p>
                </div>
              </div>
            </div>

            {/* Java */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-8 md:left-1/2 top-8 h-full w-1 bg-indigo-500/30"></div>
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center group">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-semibold text-indigo-400">Java</h3>
                  <p className="text-gray-400 text-sm mb-2">Learning from Navin Reddy</p>
                  <p className="text-gray-300">Mastered Java through Navin Reddy's Udemy course.</p>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-8 md:left-1/2 top-8 h-full w-1 bg-indigo-500/30"></div>
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center group">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-semibold text-indigo-400">Web Development</h3>
                  <p className="text-gray-400 text-sm mb-2">Frontend Journey</p>
                  <p className="text-gray-300">Explored HTML, CSS, Tailwind, and JavaScript through various YouTube channels.</p>
                </div>
              </div>
            </div>

            {/* MERN Stack */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-8 md:left-1/2 top-8 w-48 h-0.5 bg-indigo-500/30"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center group">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 border-4 border-gray-900 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 mt-4 md:mt-0 bg-gray-800/50 p-6 rounded-lg border border-gray-700 backdrop-blur-sm transform group-hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-semibold text-indigo-400">MERN Stack</h3>
                  <p className="text-gray-400 text-sm mb-2">Full Stack Development</p>
                  <p className="text-gray-300">Completed MERN stack development through KG Coding channel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;