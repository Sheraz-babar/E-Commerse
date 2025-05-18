import React from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PaypalButton";
import { motion } from "framer-motion";

const cart = {
  products: [
    {
      name: "Product 1",
      size: "M",
      color: "Red",
      price: 29.99,
      Image: "https://picsum.photos/150?random=1",
    },

    {
      name: "Product 2",
      size: "42",
      color: "Yellow",
      price: 59.99,
      Image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 89.98,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = React.useState(null);

  const [shippingAddress, setShippingAddress] = React.useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment successful", details);
    navigate("/order-confirmation");
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto py-10 px-6 tracking-tighter"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        {/* Checkout Form */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">

        <h2 className="text-2xl font-semibold uppercase mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={"user@example.com"}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email address"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                value={shippingAddress.firstname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstname: e.target.value,
                  })
                }
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-pink-500"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                value={shippingAddress.lastname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastname: e.target.value,
                  })
                }
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-pink-500"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-pink-500"
              placeholder="Address"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-pink-500"
                placeholder="+92 1234567890"
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-pink-500"
                placeholder="Postal Code"
                required
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-pink-500"
                placeholder="City"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-pink-500"
                placeholder="Country"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 rounded shadow-lg hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                Continue to Payment
              </motion.button>
            ) : (
              <div>
                <PayPalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={(error) => {
                    console.log(error);
                    alert("Payment failed. Please try again.");
                  }}
                />
                <button
                  className="w-full flex items-center justify-center bg-yellow-400 text-black py-3 rounded mb-4 hover:bg-yellow-300 transition"
                  aria-label="Pay with PayPal"
                  onClick={handlePaymentSuccess}
                >
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                    alt="PayPal Logo"
                    className="h-5 mr-2"
                  />
                  <span className="font-medium">Pay with PayPal</span>
                </button>
                 {/* Pay with Card Button */}
                <button
                  className="w-full flex items-center justify-center bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                  aria-label="Pay with Card"
                  onClick={handlePaymentSuccess}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 0A2.25 2.25 0 016 6.75h12a2.25 2.25 0 012.25 2.25m-16.5 0v6a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-6m-16.5 6h16.5"
                    />
                  </svg>
                  <span className="font-medium">Pay with Card</span>
                </button>

                <p className="text-sm text-gray-500 mt-2 text-center">
                  Powered by <span className="font-semibold">PayPal</span>
                </p>
              </div>

            )}
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl text-center font-semibold uppercase mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Order Summary</h2>
        <div className="space-y-4">
          {cart.products.map((product, index) => (
            <motion.div
              key={index}
              className="flex items-start justify-between space-x-4 p-4 hover:bg-gray-100 rounded-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start">
                <img
                  src={product.Image}
                  alt={product.name}
                  className="w-24 h-24 rounded-lg object-cover shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-base text-gray-600">
                    Size: {product.size} || Color: {product.color}
                  </p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800">${product.price}</p>
            </motion.div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-base">
            <span>Subtotal</span>
            <span>${cart.totalPrice}</span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Shipping</span>
            <span>$ 0.00</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${cart.totalPrice}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
