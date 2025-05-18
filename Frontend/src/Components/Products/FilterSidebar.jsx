import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = React.useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: parseInt(params.minPrice) || 0,
      maxPrice: parseInt(params.maxPrice) || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xs md:max-w-md lg:max-w-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase tracking-wider bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text hover:scale-105 transform transition duration-300">
        Filters
      </h1>

      {/* Category Filter */}
      <div className="mb-5">
        <label className="block text-green-600 font-extrabold  mb-2 ">
          Category
        </label>
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center p-2 rounded-lg transition hover:bg-indigo-50 hover:scale-105 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
            />
            <span className="ml-3 text-gray-700">{category}</span>
          </label>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-5">
        <label className="block text-green-600 font-extrabold mb-2">
          Gender
        </label>
        {genders.map((gender) => (
          <label
            key={gender}
            className="flex items-center p-2 rounded-lg transition hover:bg-indigo-50 hover:scale-105 cursor-pointer"
          >
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filters.gender === gender}
              onChange={handleFilterChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
            />
            <span className="ml-3 text-gray-700">{gender}</span>
          </label>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-5">
        <label className="block text-green-600 font-extrabold mb-2">
          Color
        </label>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-8 h-8 rounded-full border border-gray-300 transition transform duration-200 hover:scale-110 hover:shadow-md cursor-pointer ${
                filters.color === color
                  ? "border-indigo-500 ring-2 ring-indigo-400"
                  : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-5">
        <label className="block text-green-600 font-extrabold">Size</label>
        <div className="grid grid-cols-2 ">
          {sizes.map((size) => (
            <label
              key={size}
              className="flex items-center p-2 rounded-lg transition hover:bg-indigo-50 hover:scale-105 cursor-pointer"
            >
              <input
                type="checkbox"
                name="size"
                value={size}
                checked={filters.size.includes(size)}
                onChange={handleFilterChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
              />
              <span className="ml-2 text-gray-700">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className="mb-5">
        <label className="block text-green-600 font-extrabold mb-2">
          Material
        </label>
        {materials.map((material) => (
          <label
            key={material}
            className="flex items-center p-2 rounded-lg transition hover:bg-indigo-50 hover:scale-105 cursor-pointer"
          >
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
            />
            <span className="ml-2 text-gray-700">{material}</span>
          </label>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-5">
        <label className="block text-green-600 font-extrabold mb-2">
          Brand
        </label>
        {brands.map((brand) => (
          <label
            key={brand}
            className="flex items-center p-2 rounded-lg transition hover:bg-indigo-50 hover:scale-105 cursor-pointer"
          >
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
            />
            <span className="ml-2 text-gray-700">{brand}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <label className="block text-green-600 font-extrabold mb-3">
          Price Range
        </label>
        <div className="relative">
          <input
            type="range"
            min={0}
            max={100}
            name="priceRange"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-green-300 to-green-500 hover:scale-105 transition"
          />
          <div className="flex justify-between mt-2 text-gray-700">
            <span className="font-semibold text-indigo-500">$0</span>
            <span className="font-semibold text-indigo-500">$100</span>{" "}
            {/* Fixed Value */}
          </div>
        </div>
        <div className="mt-4 p-2 text-center bg-indigo-50 rounded-lg shadow-md hover:scale-105 transition">
          <span className="font-semibold text-gray-700">Selected Price:</span>{" "}
          <span className="text-indigo-600 font-bold">${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
