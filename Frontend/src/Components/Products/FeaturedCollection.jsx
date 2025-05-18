import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp"; // Placeholder image
import { motion } from "framer-motion";

const FeaturedCollection = () => {
  return (
    <section className="relative py-12 px-4 lg:px-0 overflow-hidden">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 animate-gradient-move"></div>

      <div className="container mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center gap-8 bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
        {/* Floating Decorations */}
        <div className="absolute -top-10 -left-8 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -right-8 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-30"></div>

        {/* Left Side */}
        <motion.div
          className="lg:w-1/2 p-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-semibold text-green-600 uppercase mb-2 tracking-widest">
            Comfort and Style
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight text-gray-900">
            Apparel made for every occasion and season.
          </h2>
          <p className="text-sm lg:text-base text-gray-700 mb-6">
            Explore our latest collection of clothing and accessories, designed
            to keep you comfortable and stylish all year round.
          </p>
          <Link
            to="/collections/all"
            className="relative bg-green-600 text-white px-6 py-3 rounded-lg text-sm lg:text-base shadow-md hover:bg-green-700 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-0 bg-green-400 opacity-30 blur-xl rounded-lg"></span>
            <span className="relative">Shop Now</span>
          </Link>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:w-1/2 p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-md border border-gray-100 group">
            <img
              src={featured}
              alt="Featured Collection"
              className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            {/* Parallax Effect */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply group-hover:mix-blend-normal"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
