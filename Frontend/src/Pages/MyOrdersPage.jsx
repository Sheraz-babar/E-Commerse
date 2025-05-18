import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MyOrdersPage = () => {
  const [orders, setOrders] = React.useState([]);
  const navigate = useNavigate();

  // Simulate fetching orders
  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500/?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "34567",
          createdAt: new Date(),
          shippingAddress: {
            city: "San Francisco",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500/?random=2",
            },
          ],
          totalPrice: 200,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
        My Orders
      </h1>

      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full bg-gray-50 text-sm text-gray-800">
          <thead>
            <tr className="text-xs text-gray-700 uppercase bg-blue-100">
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Created</th>
              <th className="py-3 px-4">Shipping Address</th>
              <th className="py-3 px-4">Items</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <motion.tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="bg-white border-b hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <td className="py-3 px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-16 h-16 mx-3 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{order._id}</td>
                  <td className="py-3 px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-3 px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-3 px-4">{order.orderItems.length}</td>
                  <td className="py-3 px-4">${order.totalPrice}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      } px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
