import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Won Void hack()6.0",
    description: "National-Level Hackathon hosted by Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore on 19-20 Nov",
    image: "winner.png",
  },
  {
    title: "Finished with top 10",
    description: "Participated in the Nexus 3.0 Hackathon to develop innovative solutions.",
    image: "frontend.jpeg",
  },
  {
    title: "Participated in Technotronics ",
    description: " Hackathon Organised by the Dnyanprassak mandal's college and Research Center,Goa .",
    image: "goa.jpeg",
  },
  {
    title: "Certified in Java",
    description: "Developed a strong foundation in Core Java through Navin Reddy's Udemy course",
    image: "java.jpeg",
  },

  {
    title: "HTML & CSS Certificate",
    description: "Completed a 6-day interactive boot camp on modern HTML and CSS techniques.",
    image: "letsupgrads.jpeg",
  },

  {
    title: "Certified in C",
    description: "Certified in C from NPTEL, enhancing programming skills.",
    image: "c.jpeg",
  },
  {
    title: "Certified in Python",
    description: "Learned Python basics, building foundational programming skills.",
    image: "python.jpeg",
  },
  // {
  //   title: "Java Internship",
  //   description: "Internship experience in Java development at CodeAlpha.",
  //   image: "quize.jpg",
  // },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const AchievementsSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Achievements
        </motion.h2>

        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} keyBoardControl>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 hover:scale-105 transition-transform duration-300 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="w-full h-48 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(achievement.image)}
              >
                <img src={achievement.image} alt={achievement.title} className="w-full h-full object-center" />

                {/* "View" text overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">View</p>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-4 rounded-lg max-w-lg w-full max-h-[90vh] flex flex-col items-center">
            {/* Close button (Always Visible) */}
            <button
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-red-500 bg-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Image Display */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSlider;
