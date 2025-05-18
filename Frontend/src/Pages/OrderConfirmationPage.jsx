import React from "react";

const Checkout = {
  _id: "123456789",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 50,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Shirt",
      color: "Yellow",
      size: "M",
      price: 150,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

const OrderConfirmationPage = () => {
  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    const estimatedDeliveryDate = new Date(orderDate);
    estimatedDeliveryDate.setDate(orderDate.getDate() + 15); // Add 15 days for delivery
    return estimatedDeliveryDate.toDateString().toLocaleUpperCase();
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-10 bg-gradient-to-b from-gray-50 to-white rounded-lg shadow-lg my-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
        Thank You for Your Order!
      </h1>

      {Checkout && (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-6">
            {/* Order ID and Date */}
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg font-semibold">
                Order ID: {Checkout._id}
              </h2>
              <p className="text-gray-600">
                Order Date: {new Date(Checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm font-semibold">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(Checkout.createdAt)}
              </p>
            </div>
          </div>

          <div className="mb-6 sm:mb-12">
            <h3 className="text-lg font-semibold mb-4">Ordered Items:</h3>
            {Checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex sm:flex-row items-center border-b border-gray-300 py-4 px-2 sm:px-4 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md rounded-lg"
              >
                <div>
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" object-cover rounded-lg mr-0 sm:mr-4 transform hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between w-full mx-6">
                  {/* Product Name */}
                  <h4 className="text-lg lg:text-xl font-semibold text-center sm:text-left mt-2 sm:mt-0">
                    {item.name}
                  </h4>
                  {/* Product Details */}
                  <div className="flex-grow mx-4 sm:mx-8 text-center sm:text-left">
                    <p className="text-sm lg:text-base text-gray-600">Color: {item.color}</p>
                    <p className="text-sm lg:text-base text-gray-600">Size: {item.size}</p>
                    <p className="text-sm lg:text-base text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  {/* Product Price */}
                  <p className="text-lg font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg text-center">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Payment Info */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
              <h3 className="text-lg font-semibold mb-2">Payment Info</h3>
              <p className="text-sm text-gray-600">Payment Method: PayPal</p>
            </div>
            {/* Delivery Info */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
              <h3 className="text-lg font-semibold mb-2">Delivery Info</h3>
              <p className="text-sm text-gray-600 text-center">
                Address: {Checkout.shippingAddress.address}
              </p>
              <p className="text-sm text-gray-600 text-center">
                City: {Checkout.shippingAddress.city}
              </p>
              <p className="text-sm text-gray-600 text-center">
                Country: {Checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
