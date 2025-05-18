import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = React.useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 100,
          quantity: 2,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "T-Shirt",
          price: 50,
          quantity: 1,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <motion.div
      className="max-w-7xl mx-auto p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
        Order Details
      </h1>
      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <motion.div
          className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Order Information */}
          <div className="flex flex-col sm:flex-row justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Order ID:{" "}
                <span className="text-indigo-600 font-bold">
                  {orderDetails._id}
                </span>
              </h3>
              <p className="text-gray-600 mb-2">
                Created At:{" "}
                <span className="text-gray-800 font-medium">
                  {orderDetails.createdAt.toLocaleString()}
                </span>
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <motion.span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                } px-4 py-2 rounded-full text-sm font-medium mb-2 hover:shadow-md`}
                whileHover={{ scale: 1.1 }}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </motion.span>
              <motion.span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                } px-4 py-2 rounded-full text-sm font-medium mb-2 hover:shadow-md`}
                whileHover={{ scale: 1.1 }}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </motion.span>
            </div>
          </div>

          {/* Payment, Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                Payment Information
              </h4>
              <p className="text-gray-600 mb-2">
                Payment Method: {orderDetails.paymentMethod}
              </p>
              <p className="text-gray-600 mb-2">
                Status: {orderDetails.isPaid ? "Paid" : "Pending"}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                Shipping Details
              </h4>
              <p className="text-gray-600 mb-2">
                Shipping Method: {orderDetails.shippingMethod}
              </p>
              <p className="text-gray-600 mb-2">
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </motion.div>
          </div>

          {/* Product List */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold text-indigo-600 mb-4">
              Product List
            </h4>
            <motion.table
              className="min-w-full border-collapse rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <thead>
                <tr className="bg-indigo-100 text-indigo-800">
                  <th className="px-4 py-2 text-left font-medium">Product</th>
                  <th className="px-4 py-2 text-left font-medium">Price</th>
                  <th className="px-4 py-2 text-left font-medium">Quantity</th>
                  <th className="px-4 py-2 text-left font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item, index) => (
                  <motion.tr
                    key={item.productId}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-indigo-50 transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <td className="px-4 py-2 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 mx-0 sm:mx-4 object-cover rounded-lg shadow-sm"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-600  hover:underline hover:text-blue-800 font-medium"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-2 text-indigo-600 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>

          {/* Back to Orders Link */}
          <motion.div
            className="mt-6 items-center flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/my-orders"
              className="inline-block bg-indigo-600 m-1 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Back to My Orders
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OrderDetailsPage;
