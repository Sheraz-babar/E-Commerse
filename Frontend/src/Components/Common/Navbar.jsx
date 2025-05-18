import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiBars3BottomRight,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-50 to-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* Left - Logo with animation */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Rabbit
            </Link>
          </div>

          {/* Center - Navigation Bar */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/collection/all"
              className="relative text-gray-700 hover:text-black text-sm font-medium uppercase group"
            >
              Men
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="#"
              className="relative text-gray-700 hover:text-black text-sm font-medium uppercase group"
            >
              Women
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="#"
              className="relative text-gray-700 hover:text-black text-sm font-medium uppercase group"
            >
              Top Wear
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="#"
              className="relative text-gray-700 hover:text-black text-sm font-medium uppercase group"
            >
              Bottom Wear
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/admin"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg text-sm text-white font-medium hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Admin
            </Link>

            <Link
              to="/Login"
              className="hover:text-black transition-colors duration-300 p-1 rounded-full hover:bg-gray-100"
            >
              <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-pink-600 transition-colors duration-300" />
            </Link>
            <button
              onClick={toggleCartDrawer}
              className="relative hover:text-black p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 hover:text-pink-600 transition-colors duration-300" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full px-1.5 py-0.5 transform hover:scale-110 transition-transform duration-200">
                4
              </span>
            </button>

            {/* Search Icon */}
            <div className="overflow-hidden transition-all duration-500">
              <SearchBar />
            </div>
            <button
              className="md:hidden p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
              onClick={toggleNavDrawer}
            >
              <HiBars3BottomRight className="h-6 w-6 text-gray-700 hover:text-pink-600" />
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Navigation Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-gradient-to-b from-white to-gray-50 shadow-xl transform transition-transform duration-300 z-50 
          ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleNavDrawer}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <IoMdCloseCircle className="h-6 w-6 text-gray-600 hover:text-pink-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Menu
          </h2>
        </div>
        <nav className="flex flex-col space-y-4 px-4">
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-pink-600 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-pink-50"
          >
            Men
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-pink-600 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-pink-50"
          >
            Women
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-pink-600 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-pink-50"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-pink-600 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-pink-50"
          >
            Bottom Wear
          </Link>
        </nav>

        {/* Admin link in mobile drawer */}
        <div className="mt-8 px-4">
          <Link
            to="/admin"
            onClick={toggleNavDrawer}
            className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg text-sm text-white font-medium hover:shadow-lg hover:shadow-pink-200 transition-all duration-300"
          >
            Admin Panel
          </Link>
        </div>
      </div>

      {/* Overlay when mobile drawer is open */}
      {navDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleNavDrawer}
        />
      )}
    </>
  );
};

export default Navbar;
