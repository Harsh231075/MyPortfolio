import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NextGen Learn",
    description:
      "NextGen Learn – AI-Powered Learning Platform .",
    image: "NextGen.png", // Replace with your image path
    link: "https://next-gen-learn-eta.vercel.app/",
  },
  {
    title: "Self Learning",
    description:
      "An AI-powered learning platform offering personalized study plans, quizzes, performance analysis, and skill enhancement.",
    image: "Self.png", // Replace with your image path
    link: "https://self-learning-delta.vercel.app/",
  },
  {
    title: "Code Review Pro",
    description:
      "Code Review Pro automates AI-based code reviews, suggests improvements, and offers a typing test certificate.",
    image: "codeReview.png", // Replace with your image path
    link: "https://code-review-pro.vercel.app/",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce web app with user authentication, product filtering, and user and Admin.",
    image: "e-commerce.png", // Replace with your image path
    link: "https://shoping-git-main-harsh-singhs-projects-a7a5f95c.vercel.app/",
  },
  {
    title: "Collage Website",
    description:
      "Built a college website to showcase departments, courses, placements, facilities, admissions, etc.",
    image: "collage.png", // Replace with your image path
    link: "https://college-hazel.vercel.app/",
  },
  {
    title: "BookStore",
    description:
      "Created  using  MERN stack Bookstore app with authentication, publishing, dark mode, and Tailwind.",
    image: "bookstore.png", // Replace with your image path
    link: "https://harsh-book-store.vercel.app/",
  },
  {
    title: "Shoes Website",
    description:
      "Built a responsive shoe showcase website with HTML and CSS, focusing on design and layout.",
    image: "shoes.png", // Replace with your image path
    link: "https://harsh231075.github.io/shoes_project/",
  },

];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        {/* Carousel for Project Cards */}
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} keyBoardControl>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
