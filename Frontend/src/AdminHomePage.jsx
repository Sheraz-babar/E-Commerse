import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiShoppingCart } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";
const AdminHomePage = () => {
  const orders = [
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Processing",
    },

    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Shipped",
    },
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Delivered",
    },
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Cancelled",
    },

    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Processing",
    },

    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Shipped",
    },
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Delivered",
    },
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Cancelled",
    },

    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Processing",
    },

    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Shipped",
    },
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Delivered",
    },
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Cancelled",
    },
  ];

  const stats = [
    {
      title: "Total Orders",
      value: orders.length,
      link: "/admin/orders",
      linkText: "Manage Orders",
    },
    {
      title: "Total Products",
      value: 100,
      link: "/admin/products",
      linkText: "Manage Products",
    },
    { title: "Total Revenue", value: "$1000", link: null },
  ];

  const statusColors = {
    Processing: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center mb-8 px-6">
        <h1 className="text-2xl sm:text-3xl flex items-center justify-center gap-3 md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
          Welcome to Admin Dashboard!
          <RiAdminFill className="text-emerald-500" />
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-4 text-center">
              <h2 className="text-lg font-medium text-gray-500">
                {stat.title}
              </h2>
              <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              {stat.link && (
                <Link
                  to={stat.link}
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {stat.linkText} →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="relative p-2 mb-4"
                      >
                        <HiShoppingCart className="text-4xl text-purple-500 z-10 relative" />
                        <div className="absolute inset-0 rounded-full bg-purple-100 animate-pulse"></div>
                      </motion.div>
                      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                        All Products
                      </h2>
                      <p className="text-gray-500">
                        {orders.length} registered products
                      </p>
                    </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <motion.tr
                      key={order._id}
                      className="relative group cursor-pointer"
                    >
                      {/* Highlight bar effect */}

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                        <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {order._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {order.user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                        ${order.totalPrice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            statusColors[order.status] ||
                            "bg-gray-100 text-gray-800"
                          } group-hover:shadow-sm transition-all`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No recent orders found.
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

export default AdminHomePage;
