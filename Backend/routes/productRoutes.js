const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new product
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, // Reference to the user who created the product
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route PUT /api/users/products/:id
// @desc Update an existing user's product ID
// @access Private/Admin

router.put("/:id", protect, admin, async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Request body is empty or invalid",
        contentType: req.headers["content-type"],
      });
    }

    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured = isFeatured || product.isFeatured;
      product.isPublished = isPublished || product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error in PUT /products/:id:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error in DELETE /products/:id:", error);
    res.status(500).json("Server error");
  }
});

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public

router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;

    let query = {};

    // Filter by collection
    if (collection && collection.toLocaleLowerCase() !== "all") {
      query.collections = collection;
    }

    // Filter by Category
    if (category && category.toLocaleLowerCase() !== "all") {
      query.category = category;
    }

    // Filter by material
    if (material) {
      query.material = { $in: material.split(",") };
    }

    // Filter by brand
    if (brand) {
      query.brand = { $in: brand.split(",") };
    }

    // Filter by size
    if (size) {
      query.sizes = { $in: size.split(",") };
    }

    // Filter by color
    if (color) {
      query.colors = { $in: [color] };
    }

    // Filter by gender
    if (gender) {
      query.gender = gender;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }
      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    // Filter by search term
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Sort products
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // Fetch products from the database and apply sorting and limiting
    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 10);
    res.json(products);
  } catch (error) {
    console.error("Error in GET /products:", error);
    res.status(500).send("Server error");
  }
});

// @route GET /api/products/best-seller
// @desc Get best-selling product with highest rating
// @access Public

router.get("/best-seller", async (req, res) => {
  try {
    const bestSeller = await Product.findOne()
      // Sort by rating in descending order
      .sort({ rating: -1 })
      // Limit to one product
      // .limit(1);

    if (bestSeller) {
      res.json(bestSeller);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error in GET /products/best-seller:", error);
    res.status(500).send("Server error");
  }
});

// @route GET /api/products/new-arrivals
// @desc Get latest 8 products - Creation date
// @access Public

router.get("/new-arrivals", async (req, res) => {
  try {
    // Fetch the latest 8 products sorted by creation date
    const newArrivals = await Product.find()
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .limit(8); // Limit to 8 products
    res.json(newArrivals);
  } catch (error) {
    console.error("Error in GET /products/new-arrivals:", error);
    res.status(500).send("Server error");
  }
})

//  route GET /api/products/:id
// @desc Get a single product by ID
// @access Public

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error in GET /products/:id:", error);
    res.status(500).send("Server error");
  }
});

// route GET /api/products/similar/:id
// @desc Get similar products based on current product's gender and category
// @access Public

router.get("/similar/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const similarProducts = await Product.find({
      // Exclude the current product ID
      _id: { $ne: id },
      gender: product.gender,
      category: product.category,
    }).limit(4); // Limit to 4 similar products

    res.json(similarProducts);
  } catch (error) {
    console.error("Error in GET /products/similar/:id:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
