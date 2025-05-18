import React from "react";
import MensCollectionImage from "../../assets/mens-collection.webp";
import WomensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collection */}
        <div className="relative flex-1 group overflow-hidden rounded-3xl shadow-xl">
          <img
            src={WomensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[250px] md:h-[500px]  object-cover transition-transform duration-700 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-fuchsia-400/15 to-transparent z-10"></div>

          {/* Floating Glow */}
          <div className="absolute top-8 right-10 w-24 h-24 bg-pink-300 opacity-20 blur-2xl rounded-full animate-ping z-0"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-md rounded-2xl p-6 max-w-xs z-20 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-3 leading-tight">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="inline-block text-pink-600 font-semibold hover:text-pink-500 transition-colors"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1 group overflow-hidden rounded-3xl shadow-xl">
          <img
            src={MensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[250px] md:h-[500px] object-cover transition-transform duration-700 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-purple-600/15 to-transparent z-10"></div>

          {/* Floating Glow */}
          <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-400 opacity-20 blur-2xl rounded-full animate-ping z-0"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-md rounded-2xl p-6 max-w-xs z-20 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-white drop-shadow-md mb-3 leading-tight">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="inline-block text-blue-700 font-semibold hover:text-blue-600 transition-colors"
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
