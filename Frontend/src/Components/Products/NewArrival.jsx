import React, { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewArrival = () => {
  const scrollRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);

  const newArrivals = [
    // Sample data for new arrivals
    {
      _id: 1,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },

    {
      _id: 2,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=2",
          alt: "Stylish Jacket",
        },
      ],
    },

    {
      _id: 3,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=3",
          alt: "Stylish Jacket",
        },
      ],
    },

    {
      _id: 4,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=4",
          alt: "Stylish Jacket",
        },
      ],
    },

    {
      _id: 5,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=5",
          alt: "Stylish Jacket",
        },
      ],
    },

    {
      _id: 6,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=6",
          alt: "Stylish Jacket",
        },
      ],
    },

    {
      _id: 7,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=7",
          alt: "Stylish Jacket",
        },
      ],
    },

    {
      _id: 8,
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500/?random=8",
          alt: "Stylish Jacket",
        },
      ],
    },
  ];

  const HandleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const HandleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const HandleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > container.clientWidth + leftScroll;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Initial check
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <section className="pt-10 mb-20 bg-gradient-to-b from-white to-gray-50 overflow-visible relative z-0">
      {/* Header */}
      <div className="container mx-auto text-center mb-16 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          New Arrivals
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Discover our latest collection of stylish jackets — handpicked for the
          trendsetters. Be bold, be first.
        </motion.p>

        {/* Arrows */}
        <div className="absolute right-4 bottom-[-30px] flex space-x-2 z-20">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border shadow-xl ${
              canScrollLeft
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } transition`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border shadow-xl ${
              canScrollRight
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } transition`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide gap-8 px-4 py-4 m-4 mr-6  ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={HandleMouseDown}
        onMouseMove={HandleMouseMove}
        onMouseUp={HandleMouseUpOrLeave}
        onMouseLeave={HandleMouseUpOrLeave}
      >
        <div className="flex gap-8 min-h-[270px] relative z-10 px-1">
          {newArrivals.map((product) => (
            <motion.div
              key={product._id}
              className="min-w-[30%] sm:min-w-[30%] lg:min-w-[30%] relative group transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-3xl shadow-lg hover:shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                New
              </span>

              {/* Product Image */}
              <img
                src={product.image[0]?.url}
                alt={product.image[0]?.altText || product.name}
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Glassy Info Container */}
              <div className="bg-gradient-to-br from-white/30 via-white/20 to-purple-100/10 backdrop-blur-[10px] text-center p-5 rounded-b-3xl shadow-xl border-t border-white/20 transition-all duration-300 group-hover:bg-white/40">
                <Link to={`/product/${product._id}`} className="block">
                  <h3 className="text-lg font-semibold text-pink-600 group-hover:text-pink-700 transition">
                    {product.name}
                  </h3>
                  <p className="text-gray-800 mt-1 font-medium">
                    ${product.price}
                  </p>

                  {/* Shop Now with Arrow */}
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-pink-600 font-medium transition-all duration-300 group-hover:translate-x-1">
                    Shop Now
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
