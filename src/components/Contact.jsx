import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_s14g1e1", // Replace with your EmailJS service ID
        "template_7exlhon", // Replace with your EmailJS template ID
        formData,
        "1BKmOHntYXSu7-AUH" // Replace with your EmailJS public key
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("Your message has been sent to the admin successfully!");
    } catch (error) {
      setStatus("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-6">Get In Touch</h2>
        <p className="text-center text-gray-300 mb-12">
          Have a question or want to work together? Fill out the form below or reach out via social media.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
          {status && (
            <p className={`mt-4 text-center ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}
        </form>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect with me:</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/harsh-singh-baghel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/harsh231075"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-500 text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
