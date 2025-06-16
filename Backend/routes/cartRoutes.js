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
  const { productId, quantity, size, color, guestId, userId } = req.body;

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
        guestId: guestId ? guestId : "guest_" + Date.now(), // Generate a unique guest ID if not provided
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

// @route PUT /api/cart
// @desc Update product quantity in cart for logged-in user or guest
// @access Public

router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;
  try {
    // Check if the user is logged in or a guest
    let cart = await getCart(userId, guestId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product in the cart
    const productIndex = cart.products.findIndex(
      (item) =>
        item.productId.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (productIndex > -1) {
      // If product exists, update quantity
      if (quantity > 0) {
        // Update quantity
        cart.products[productIndex].quantity = quantity;
      } else {
        // If quantity is 0 or less, remove the product from the cart
        cart.products.splice(productIndex, 1);
      }

      // Recalculate total price
      cart.totalPrice = parseFloat(
        cart.products
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error updating product in cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route DELETE /api/cart
// @desc Remove product from cart for logged-in user or guest
// @access Public

router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;

  try {
    // Check if the user is logged in or a guest
    let cart = await getCart(userId, guestId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product in the cart
    const productIndex = cart.products.findIndex(
      (item) =>
        item.productId.toString() === productId &&
        item.size === size &&
        item.color === color
    );

    if (productIndex > -1) {
      // If product exists, remove it from the cart
      cart.products.splice(productIndex, 1);

      // Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route GET /api/cart
// @desc Get cart for logged-in user or guest
// @access Public

router.get("/", protect, async (req, res) => {
  const { userId, guestId } = req.query;

  try {
    // Check if the user is logged in or a guest
    const cart = await getCart(userId, guestId);

    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route POST /api/cart/merge
// @desc Merge guest cart with user cart on login
// @access Private

router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;
  const userId = req.user._id;

  try {
    // Find the guest cart
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: userId });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({ message: "No products in guest cart" });
      }

      if (userCart) {
        // Merge guest cart with user cart
        guestCart.products.forEach((guestProduct) => {
          const existingProductIndex = userCart.products.findIndex(
            (userProduct) =>
              userProduct.productId.toString() ===
                guestProduct.productId.toString() &&
              userProduct.size === guestProduct.size &&
              userProduct.color === guestProduct.color
          );

          if (existingProductIndex > -1) {
            // If product exists in user cart, update quantity
            userCart.products[existingProductIndex].quantity +=
              guestProduct.quantity;
          } else {
            // If product does not exist, add it to user cart
            userCart.products.push(guestProduct);
          }
        });

        // Recalculate total price for user cart
        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        // Save the updated user cart
        await userCart.save();

        // Delete the guest cart
        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.error("Error deleting guest cart:", error);
        }
        return res.status(200).json(userCart);
      } else {
        // If user cart does not exist, create it with guest cart products
        guestCart.user = userId;
        guestCart.guestId = undefined; // Remove guest ID
        guestCart._id = undefined; // Reset _id to create a new cart
        await guestCart.save();
        res.status(200).json(guestCart);
      }
    } else {
      if (userCart) {
        return res.status(200).json(userCart);
      }
      res.status(404).json({ message: "Guest cart not found" });
    }
  } catch (error) {
    console.error("Error merging carts:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
