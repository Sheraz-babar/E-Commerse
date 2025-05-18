import React, { useState } from "react";
import {
  FiUpload,
  FiCheck,
  FiX,
  FiDollarSign,
  FiPackage,
  FiTag,
  FiGrid,
  FiShoppingBag,
  FiDroplet,
  FiImage,
  FiSave,
} from "react-icons/fi";
import { FaPencilRuler, FaSpinner } from "react-icons/fa";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: "",
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collection: "",
    material: "",
    gender: "",
    images: [
      { url: "https://picsum.photos/150?random=1" },
      { url: "https://picsum.photos/150?random=2" },
    ],
  });

  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      console.log(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    console.log("Product data submitted:", productData);
    setTimeout(() => {
      setIsUpdating(false);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Page Header */}
      <div className="text-center mb-8 px-6">
        <h1 className="text-2xl sm:text-3xl flex items-center justify-center gap-3 md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
          User Management!
          <FiShoppingBag className="text-emerald-500" />
        </h1>
        <p className="text-lg text-green-600 font-medium">
          Edit your product details below
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg mx-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-300">
            <FiPackage className="text-emerald-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-800">
              Basic Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FiTag className="text-gray-500" />
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                placeholder="Enter product description"
                required
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Pricing & Inventory Section */}
        <div className="bg-gray-50 p-6 rounded-lg mx-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-300">
            <FiDollarSign className="text-emerald-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-800">
              Pricing & Inventory
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FiDollarSign className="text-gray-500" />
                Price ($) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                  placeholder="0.00"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            {/* Count In Stock */}
            <div>
              <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FiPackage className="text-gray-500" />
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="countInStock"
                value={productData.countInStock}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                placeholder="Enter quantity"
                required
                min="0"
              />
            </div>

            {/* SKU */}
            <div>
              <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FiTag className="text-gray-500" />
                SKU <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sku"
                value={productData.sku}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                placeholder="Enter SKU"
                required
              />
            </div>
          </div>
        </div>

        {/* Variants Section */}
        <div className="bg-gray-50 p-6 rounded-lg mx-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-300">
            <FiGrid className="text-emerald-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-800">
              Product Variants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sizes */}
            <div>
              <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FaPencilRuler className="text-gray-500" />
                Available Sizes <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sizes"
                value={productData.sizes.join(", ")}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    sizes: e.target.value.split(",").map((size) => size.trim()),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                placeholder="S, M, L, XL"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Separate sizes with commas
              </p>
            </div>

            {/* Colors */}
            <div>
              <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                <FiDroplet className="text-gray-500" />
                Available Colors <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="colors"
                value={productData.colors.join(", ")}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    colors: e.target.value
                      .split(",")
                      .map((color) => color.trim()),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                placeholder="Red, Blue, Green"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Separate colors with commas
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="bg-gray-50 p-6 rounded-lg mx-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-300">
            <FiImage className="text-emerald-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-800">Product Images</h2>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Upload New Images
            </label>
            <div className="flex items-center gap-4">
              <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200 relative overflow-hidden">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {uploadedFileName ? (
                    <>
                      <FiCheck className="w-8 h-8 mb-2 text-emerald-500" />
                      <div className="px-2 w-full">
                        <p className="text-xs font-medium text-emerald-600 truncate w-full text-center">
                          {uploadedFileName}
                        </p>
                        <p className="text-[10px] text-gray-500 mt-1">
                          Click to change
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FiUpload className="w-8 h-8 mb-3 text-gray-500" />
                      <p className="text-xs text-gray-500">Upload</p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  name="imageUrl"
                  onChange={handleImageUpload}
                  className="hidden"
                  accept="image/*"
                />
              </label>

              {/* Image Previews */}
              <div className="flex gap-4 overflow-x-auto py-2">
                {productData.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative group w-32 h-32 flex-shrink-0"
                  >
                    <img
                      src={image.url}
                      alt={`Product preview ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-200 group-hover:shadow-md transition duration-200"
                    />
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center px-4">
          <button
            type="submit"
            disabled={isUpdating}
            className={`px-8 py-3 text-white font-bold rounded-lg shadow-md transition-all duration-300 ${
              isUpdating
                ? "bg-emerald-600 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
            } flex items-center gap-2`}
          >
            {isUpdating ? (
              <>
                <FaSpinner className="animate-spin h-5 w-5" />
                Updating...
              </>
            ) : (
              <>
                <FiSave className="h-5 w-5" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
