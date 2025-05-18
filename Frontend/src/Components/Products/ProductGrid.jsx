import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <Link to={`/product/${product._id}`} className="block relative">
            {/* Glowing Border */}
            <div className="bg-gradient-to-br from-green-100 via-green-50 to-green-200 backdrop-blur-md rounded-lg shadow-lg p-4 text-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl relative overflow-hidden">
            {/* Badge with Nod Effect */}
              <motion.div
                className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                Hot 🔥
              </motion.div>

              {/* Product Image */}
              <div className="w-full h-60 mb-4 relative overflow-hidden rounded-lg">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Glassmorphic Text Area */}
              <div className="bg-white/30 backdrop-blur-lg text-center p-2 rounded-b-3xl shadow-inner border-t border-white/20 transition-all duration-300 group-hover:bg-white/40">
                <h3 className="text-lg font-semibold text-purple-600 group-hover:text-purple-800 transition">
                  {product.name}
                </h3>
                <p className="text-pink-600 mt-1 font-bold text-lg">
                  ${product.price}
                </p>

                {/* Shop Now with Arrow */}
                <div className="mt-3 inline-flex items-center gap-1 text-sm text-pink-600 font-medium transition-all duration-300 group-hover:translate-x-1">
                  Shop Now
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
