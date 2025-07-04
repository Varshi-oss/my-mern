import React from 'react';
import { assets } from '../assets';

const Contact = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-4 sm:px-10 md:px-20 py-16">
      
      {/* 📝 Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Contact Us</h2>
        <p className="text-gray-600 text-sm mb-6">
          We’d love to hear from you. Please fill out the form and we’ll get back to you shortly.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-full hover:bg-opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* 📷 Contact Image */}
      <div className="w-full md:w-1/2">
        <img
          src={assets.con_img}
          alt="Contact Illustration"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default Contact;
