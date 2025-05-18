import React from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search action here
    console.log("Searching for:", searchTerm);
    // Reset the search term after searching
    // setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300  ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white h-16 z-50 shadow-lg"
          : "w-auto"
      } `}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <motion.div
            className="relative w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-50 px-4 py-3 pl-5 pr-12 rounded-xl focus:outline-none w-full 
                placeholder-gray-500 text-gray-700 transition-all duration-300
                border-2 border-transparent focus:border-pink-500
                shadow-sm hover:shadow-md focus:shadow-lg"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, inear-gradient(to right, #8b5cf6, #ec4899) border-box, border: 2px solid transparent",
              }}
              autoFocus
            />

            {/* Search Icon */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.9 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-600 transition-all duration-300"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Close Icon */}
          <motion.button
            type="button"
            onClick={handleSearchToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-4 text-gray-500 hover:text-pink-600 transition-all duration-300"
          >
            <HiMiniXMark className="h-6 w-6" />
          </motion.button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700 hover:text-pink-600 transition-colors duration-300" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
