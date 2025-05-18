import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-4 lg:px-0">
        {/* Newsletter */}
        <div className="col-span-1 md:col-span-2 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="mb-4 text-gray-600">
            Be the first to hear about our new and premium products, exclusive
            events, and online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Subscribe to our newsletter and get 10% off your first purchase.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 text-sm rounded-r-md hover:bg-green-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com/"
              className="text-gray-600 hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandMeta className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-gray-600 hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/"
              className="text-gray-600 hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterLine className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600">Contact Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            <a
              href="tel:+921234567890"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              +92 123 456 7890
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2025, CompileTab, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
