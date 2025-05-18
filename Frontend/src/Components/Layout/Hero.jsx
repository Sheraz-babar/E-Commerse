import React from "react";
import heroImage from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl mt-1 ">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent backdrop-blur-sm" />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
            Welcome to <span className="text-pink-400">Our Store</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-xl lg:text-2xl mt-4 mb-6 max-w-2xl text-white/90 drop-shadow-md"
          >
            Discover the latest trends in fashion and accessories — where style
            meets simplicity.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="#"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              🛍️ Shop Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Blobs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-400 blur-3xl opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500 blur-2xl opacity-20 rounded-full animate-bounce" />
      </div>
      <br /> <br />
    </section>
  );
};

export default Hero;
