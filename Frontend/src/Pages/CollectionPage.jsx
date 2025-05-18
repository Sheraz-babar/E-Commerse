import React, { useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = React.useState([]);
  const sidebarRef = React.useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=1",
            },
          ],
        },

        {
          _id: 2,
          name: "Product 2",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=2",
            },
          ],
        },

        {
          _id: 3,
          name: "Product 3",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=3",
            },
          ],
        },

        {
          _id: 4,
          name: "Product 4",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=4",
            },
          ],
        },

        {
          _id: 5,
          name: "Product 5",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=5",
            },
          ],
        },

        {
          _id: 6,
          name: "Product 6",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=6",
            },
          ],
        },

        {
          _id: 7,
          name: "Product 7",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=7",
            },
          ],
        },

        {
          _id: 8,
          name: "Product 8",
          price: 80,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=8",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2 " /> Filter
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 my-6 ml-2 rounded-lg shadow-2xl overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 mt-4 text-center uppercase tracking-wider bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text hover:scale-105 transform transition duration-300">
          All Collections
        </h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <div className="m-4">
        <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
