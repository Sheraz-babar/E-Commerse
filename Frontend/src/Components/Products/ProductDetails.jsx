import React from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "A stylish jacket perfect for any occasion.",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/500/500/?random=1",
      alt: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500/?random=2",
      alt: "Stylish Jacket 2",
    },
    {
      url: "https://picsum.photos/500/500/?random=3",
      alt: "Stylish Jacket 3",
    },
  ],
};

const similarProducts = [
  {
    _id : 1,
    name: "Product 1",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=4",
      },
    ],
  },
  {
    _id : 2,
    name: "Product 2",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=5",
      },
    ],
  },

  {
    _id : 3,
    name: "Product 3",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=6",
      },
    ],
  },

  {
    _id : 4,
    name: "Product 4",
    price: 80,
    images: [
      {
        url: "https://picsum.photos/500/500/?random=7",
      },
    ],
  },
]
  

const ProductDetails = () => {
  const [mainImage, setMainImage] = React.useState("");
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Added to cart successfully!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === image.url
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt={selectedProduct.images[0]?.altText || "Main Product"}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-5xl font-bold mb-2 md:text-3xl">
              {selectedProduct.name}
            </h1>
            <p className="text-2xl font-semibold text-gray-800 mb-1">
              ${selectedProduct.price}{" "}
              <span className="text-base ml-2 line-through text-red-500 mb-2">
                $
                {selectedProduct.originalPrice &&
                  `${selectedProduct.originalPrice}`}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="mb-">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer ${
                      selectedColor === color ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer ${
                      selectedSize === size ? "bg-green-400 text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quality:</p>
              <div className="flex mt-2 items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded-md text-lg text-gray-700 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded-md text-lg text-gray-700 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 ${
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {isButtonDisabled ? "Adding To Cart..." : "Add to Cart"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-semibold mb-2">Characteristics</h3>
              <table className="w-full border-collapse text-left text-sm text-gray-600">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Brand</td>
                    <td className="py-2 px-4">{selectedProduct.brand}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Material</td>
                    <td className="py-2 px-4">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You may also like 👀
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
