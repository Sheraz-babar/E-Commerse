const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Helper function to get or create a cart by user ID or guest ID
const getCart = async (userId, guestId) => {
  if (userId) {
    // If user is logged in, find cart by user ID
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    // If guest, find cart by guest ID
    return await Cart.findOne({ guestId });
  } else {
    // If neither, return null
    return null;
  }
};

// @route POST /api/cart
// @desc Add product to cart for logged-in user or guest
// @access Public

router.post("/", async (req, res) => {
  const { productId, quantity, guestId, size, color, userId } = req.body;

  try {
    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the user is logged in or a guest
    let cart = await getCart(userId, guestId);

    // If cart exists, update it
    if (cart) {
      // Check if the product is already in the cart
      const productIndex = cart.products.findIndex(
        (item) =>
          item.productId.toString() === productId &&
          item.size === size &&
          item.color === color
      );

      if (productIndex > -1) {
        // If product exists, update quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // If product does not exist, add it to the cart
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          size,
          color,
          quantity,
        });
      }

      // Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      // If cart does not exist, create a new one
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + Date().getTime(), // Generate a unique guest ID if not provided
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });

      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});
