import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-4 rounded-full bg-green-100 mb-4 hover:scale-110 transition-transform">
            <HiShoppingBag className="text-4xl text-green-500" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-gray-600 text-sm">
            On orders over <strong>$50</strong>
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-4 rounded-full bg-green-100 mb-4 hover:scale-110 transition-transform">
            <HiArrowPathRoundedSquare className="text-4xl text-green-500" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            45 DAYS RETURN
          </h4>
          <p className="text-gray-600 text-sm">Money back guarantee</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-4 rounded-full bg-green-100 mb-4 hover:scale-110 transition-transform">
            <HiOutlineCreditCard className="text-4xl text-green-500" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            SECURE CHECKOUT
          </h4>
          <p className="text-gray-600 text-sm">
            100% secure payment processing
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
