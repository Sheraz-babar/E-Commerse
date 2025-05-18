import React from "react";
import { motion } from "framer-motion";
import { HiUserGroup, HiOutlineTrash } from "react-icons/hi";
import { HiPencilSquare } from "react-icons/hi2";
import {
  FaTshirt,
  FaSuitcase,
  FaSocks,
  FaHatCowboy,
  FaGlasses,
  FaRing,
  FaToolbox,
} from "react-icons/fa";
import {
  GiClothes,
  GiTShirt,
  GiArmoredPants,
  GiMonclerJacket,
  GiUnderwearShorts,
  GiConverseShoe,
  GiLargeDress,
  GiWinterGloves,
  GiTie,
  GiBowTie,
  GiBelt,
  GiSunglasses,
  GiRunningShoe,
  GiHighHeel,
  GiFlipFlops,
  GiLoincloth,
} from "react-icons/gi";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    { id: 1, name: "Shirt", price: 100, sku: 50 },
    { id: 2, name: "Suit", price: 300, sku: 20 },
    { id: 3, name: "Jeans", price: 80, sku: 75 },
    { id: 4, name: "Dress", price: 120, sku: 30 },
    { id: 5, name: "Jacket", price: 150, sku: 25 },
    { id: 6, name: "Sweater", price: 90, sku: 40 },
  ];

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log(`Deleting product with id: ${id}`);
    }
  };

  // Product avatar mapping
  const getProductAvatar = (productName) => {
    const productAvatars = {
      // Clothing
      shirt: <GiTShirt className="text-blue-500 text-xl" />,
      tshirt: <FaTshirt className="text-red-500 text-xl" />,
      suit: <FaSuitcase className="text-gray-700 text-xl" />,
      jeans: <GiArmoredPants className="text-indigo-600 text-xl" />,
      pants: <GiArmoredPants className="text-gray-800 text-xl" />,
      dress: <GiLargeDress className="text-pink-500 text-xl" />,
      jacket: <GiMonclerJacket className="text-orange-600 text-xl" />,
      coat: <GiMonclerJacket className="text-brown-800 text-xl" />,
      sweater: <FaTshirt className="text-purple-500 text-xl" />,
      hoodie: <FaTshirt className="text-gray-600 text-xl" />,
      shorts: <GiUnderwearShorts className="text-blue-400 text-xl" />,
      underwear: <GiUnderwearShorts className="text-white text-xl" />,
      socks: <FaSocks className="text-yellow-500 text-xl" />,
      hat: <FaHatCowboy className="text-brown-500 text-xl" />,
      gloves: <GiWinterGloves className="text-gray-400 text-xl" />,
      scarf: <GiLoincloth className="text-red-600 text-xl" />,
      tie: <GiTie className="text-blue-700 text-xl" />,
      bowtie: <GiBowTie className="text-black text-xl" />,
      belt: <GiBelt className="text-brown-700 text-xl" />,

      // Footwear
      shoes: <GiConverseShoe className="text-black text-xl" />,
      sneakers: <GiRunningShoe className="text-green-500 text-xl" />,
      boots: <GiRunningShoe className="text-brown-800 text-xl" />,
      sandals: <GiFlipFlops className="text-yellow-300 text-xl" />,
      heels: <GiHighHeel className="text-red-500 text-xl" />,

      // Accessories
      glasses: <FaGlasses className="text-gray-600 text-xl" />,
      sunglasses: <GiSunglasses className="text-blue-900 text-xl" />,
      jewelry: <FaRing className="text-gold-500 text-xl" />,
      watch: <FaRing className="text-silver-500 text-xl" />,

      // Default fallbacks
      clothing: <GiClothes className="text-gray-500 text-xl" />,
      apparel: <GiClothes className="text-gray-600 text-xl" />,
      garment: <GiClothes className="text-gray-700 text-xl" />,
    };
    const lowerName = productName.toLowerCase();
    const exactMatch = Object.keys(productAvatars).find(
      (key) => lowerName === key.toLowerCase()
    );

    if (exactMatch) return productAvatars[exactMatch];

    // Try partial matches
    const partialMatch = Object.keys(productAvatars).find((key) =>
      lowerName.includes(key.toLowerCase())
    );

    return partialMatch ? (
      productAvatars[partialMatch]
    ) : (
      <GiClothes className="text-gray-500 text-xl" />
    ); // Default icon
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8 px-6">
        <h1 className="text-2xl sm:text-3xl flex items-center justify-center gap-3 md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
          Product Management!
          <FaToolbox className="text-emerald-500" />
        </h1>
        <p className="text-lg text-green-600 font-medium">
          Manage all products from this page.
        </p>
      </div>
      {/* User List Management */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="relative p-2 mb-4"
            >
              <HiUserGroup className="text-4xl text-purple-500 z-10 relative" />
              <div className="absolute inset-0 rounded-full bg-purple-100 animate-pulse"></div>
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              All Products
            </h2>
            <p className="text-gray-500">
              {products.length} registered products
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200  text-lg text-center font-medium text-black uppercase">
                <tr>
                  <th className="py-4 px-6 tracking-wider">Name</th>
                  <th className="py-4 px-6 tracking-wider">Price</th>
                  <th className="py-4 px-6 tracking-wider">SKU</th>
                  <th className="py-4 px-6 tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {products.length > 0 ? (
                  products.map((product) => (
                    <motion.tr
                      key={product.id}
                      className="group relative text-center"
                    >
                      <td className="px-6 py-2 whitespace-nowrap ">
                        <div className="flex items-center">
                          <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          <div className="flex items-center justify-center">
                            <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                            <span className="mr-3 flex items-center justify-center w-6 h-6">
                              {getProductAvatar(product.name)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                        $ {product.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {product.sku}
                      </td>
                      <td className="px-0 py-4 whitespace-nowrap text-sm font-medium flex justify-center gap-1">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-red-500 hover:text-red-700 hover:bg-red-300  mr-0 flex px-2 py-2 rounded-lg transition duration-100 ease-in-out"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <HiOutlineTrash className="w-5 h-5 mr-1" />
                          <span className="">Delete</span>
                        </motion.button>

                        <Link
                          className="text-yellow-500 hover:text-yellow-700 hover:scale-105 hover:bg-yellow-300  mr-0 flex px-2 py-2 rounded-lg transition duration-100 ease-in-out"
                          to={`/admin/products/${product.id}/edit`}
                        >
                          <HiPencilSquare className="w-5 h-5 mr-1" />
                          <span className="">Edit</span>
                        </Link>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr className="text-center">
                    <td colSpan="4">
                      <div className="py-4 text-gray-500">
                        No products found. Please add some products.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductManagement;
