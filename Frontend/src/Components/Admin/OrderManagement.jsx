import React from "react";
import {
  FiCheckCircle,
  FiDollarSign,
  FiUser,
} from "react-icons/fi";
import { FaBoxOpen, FaInbox } from "react-icons/fa";
import { motion } from "framer-motion";

const OrderManagement = () => {
  const orders = [
    {
      _id: 1,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Processing",
    },
    {
      _id: 2,
      user: {
        name: "Jane Smith",
      },
      totalPrice: 245.5,
      status: "Shipped",
    },
    {
      _id: 3,
      user: {
        name: "Robert Johnson",
      },
      totalPrice: 89.99,
      status: "Delivered",
    },

    {
      _id: 4,
      user: {
        name: "Michel Johnson",
      },
      totalPrice: 9.99,
      status: "Cancelled",
    },
  ];

  const handleStatusChange = (orderId, newStatus) => {
    console.log(`Order ID: ${orderId}, New Status: ${newStatus}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8 px-6">
        <h1 className="text-2xl sm:text-3xl flex items-center justify-center gap-3 md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
          Order Management!
          <FaBoxOpen className="text-emerald-500" />
        </h1>
        <p className="text-lg text-green-600 font-medium">
          Manage all orders from this page.
        </p>
      </div>

      {/* Order List Management */}
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
              <FaInbox className="text-4xl text-purple-500 z-10 relative" />
              <div className="absolute inset-0 rounded-full bg-purple-100 animate-pulse"></div>
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              All Orders
            </h2>
            <p className="text-gray-500">{orders.length} registered orders</p>
          </div>

          <div className="bg-white rounded-xl overflow-x-auto shadow-lg overflow-hidden border border-gray-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-center">
                <tr>
                  <th className="px-6 py-4  text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                    <FiUser className="inline mr-1" /> Customer
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                    <FiDollarSign className="inline mr-1" /> Total
                  </th>
                  <th className="px-6 py-4  text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4  text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr
                      key={order._id}
                      className="hover:bg-gray-50 transition-colors duration- text-center"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {order._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <FiUser className="text-indigo-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {order.user.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          ${order.totalPrice.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={order.status}
                          className={`w-full border-2 rounded-lg p-2 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-white
                            ${
                              order.status === "Processing"
                                ? "border-yellow-400 text-yellow-700"
                                : ""
                            }
                            ${
                              order.status === "Shipped"
                                ? "border-blue-400 text-blue-700"
                                : ""
                            }
                            ${
                              order.status === "Delivered"
                                ? "border-green-400 text-green-700"
                                : ""
                            }
                            ${
                              order.status === "Cancelled"
                                ? "border-red-400 text-red-700"
                                : ""
                            }
                      `}
                          onChange={(e) => {
                            handleStatusChange(order._id, e.target.value);
                          }}
                        >
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                          onClick={() =>
                            handleStatusChange(order._id, "Delivered")
                          }
                        >
                          <FiCheckCircle className="mr-2" />
                          Mark Delivered
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <FaBoxOpen className="text-4xl mb-3" />
                        <p className="text-lg">No orders found</p>
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

export default OrderManagement;
