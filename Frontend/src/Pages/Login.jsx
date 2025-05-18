import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100">
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-blue-500 transform hover:scale-105 transition duration-300"
        >
          <h1 className="text-3xl font-extrabold text-center mb-4 text-blue-600">
            Rabbit
          </h1>
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Hey there! 👋🏻
          </h2>
          <p className="text-center mb-6 text-gray-500 text-sm">
            Enter your Username and Password to Login
          </p>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all shadow-lg"
            type="submit"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-gray-500 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex w-1/2 bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="h-full w-full flex justify-center items-center">
          <img
            src={login}
            alt="Login Illustration"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
