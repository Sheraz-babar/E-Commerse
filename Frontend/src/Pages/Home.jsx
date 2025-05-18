import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollection from "../Components/Products/GenderCollection";
import NewArrival from "../Components/Products/NewArrival";
import ProductGrid from "../Components/Products/ProductGrid";
import ProductDetails from "../Components/Products/ProductDetails";
import FeaturedCollection from "../Components/Products/FeaturedCollection";
import FeaturesSection from "../Components/Products/FeaturesSection";

// Placeholder data for products
const placeHolderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=1",
      },
    ],
  },

  {
    _id: 2,
    name: "Product 2",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=2",
      },
    ],
  },

  {
    _id: 3,
    name: "Product 3",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=3",
      },
    ],
  },

  {
    _id: 4,
    name: "Product 4",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=4",
      },
    ],
  },

  {
    _id: 5,
    name: "Product 5",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=5",
      },
    ],
  },

  {
    _id: 6,
    name: "Product 6",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=6",
      },
    ],
  },

  {
    _id: 7,
    name: "Product 7",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=7",
      },
    ],
  },

  {
    _id: 8,
    name: "Product 8",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=8",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrival />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold ">Best Seller</h2>
      <ProductDetails />

      <div className="p-6">
        <div className="container mx-auto max-w-6xl p-8">
          <h2 className="text-3xl text-center font-bold mb-10">
            Top Wears For Women
          </h2>
          <ProductGrid products={placeHolderProducts} />
        </div>
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
