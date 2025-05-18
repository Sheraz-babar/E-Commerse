import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
  FaShoppingBasket,
  FaChevronLeft,
  FaChevronRight,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(false); // Always show expanded on mobile
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { path: "/admin/users", icon: <FaUser />, label: "Users" },
    { path: "/admin/products", icon: <FaBoxOpen />, label: "Products" },
    {
      path: "/admin/orders",
      icon: <FaClipboardList />,
      label: "Orders",
      notification: hasNotifications,
    },
    { path: "/", icon: <FaStore />, label: "Shop" },
  ];

  return (
    <motion.div
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className={`fixed h-full z-50 p-6 ${
    isDarkMode
      ? "bg-gradient-to-b from-gray-900 to-gray-800"
      : "bg-gradient-to-b from-indigo-900 to-purple-900"
  } text-white shadow-xl ${
    isCollapsed && !isMobile ? "w-32" : "w-64"
  } transition-all duration-300 ease-in-out`} // Added smooth transition classes here
>
      {/* Collapse Toggle Button (hidden on mobile) */}
      {!isMobile && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`absolute -right-3 top-6 bg-yellow-300 hover:bg-yellow-400 focus:outline-none rounded-full p-1 shadow-lg z-10  ${
            isDarkMode ? "text-gray-800" : "text-purple-800"
          }`}
        >
          {isCollapsed ? (
            <FaChevronRight size={14} />
          ) : (
            <FaChevronLeft size={14} />
          )}
        </button>
      )}

      {/* Logo */}
      <div className="mb-8 text-center">
        <Link
          to="/admin"
          className="flex items-center justify-center space-x-2"
        >
          <FaShoppingBasket className="text-3xl text-white" />
          {(!isCollapsed || isMobile) && (
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Rabbit Admin
            </motion.span>
          )}
        </Link>
      </div>

      {/* User Profile */}
      <div
        className={`flex items-center mb-8 p-3 ${
          isDarkMode ? "bg-gray-800/50" : "bg-white/5"
        } rounded-lg transition-all duration-300 ${
          isCollapsed && !isMobile ? "justify-center" : "space-x-3"
        }`}
      >
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center">
          <span className="font-bold text-white">AD</span>
        </div>
        {(!isCollapsed || isMobile) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-medium">Admin User</p>
          </motion.div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {isCollapsed && !isMobile ? (
              <div className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex justify-center py-3 px-4 rounded-lg transition-all duration-200 relative ${
                      isActive
                        ? isDarkMode
                          ? "bg-gray-700/50"
                          : "bg-white/10"
                        : isDarkMode
                        ? "hover:bg-gray-700/30"
                        : "hover:bg-white/5"
                    }`
                  }
                >
                  <span className="text-lg relative">
                    {item.icon}
                    {item.notification && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                    )}
                  </span>
                </NavLink>
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                  {item.label}
                  {item.notification && (
                    <span className="ml-1 h-2 w-2 bg-red-500 rounded-full inline-block"></span>
                  )}
                </div>
              </div>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? isDarkMode
                        ? "bg-gray-700/50 shadow-md border-l-4 border-purple-300"
                        : "bg-white/10 shadow-md border-l-4 border-purple-300"
                      : isDarkMode
                      ? "hover:bg-gray-700/30 hover:border-l-4 hover:border-purple-300/30"
                      : "hover:bg-white/5 hover:border-l-4 hover:border-purple-300/50"
                  }`
                }
              >
                <span className="text-lg relative">
                  {item.icon}
                  {item.notification && (
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  )}
                </span>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            )}
          </motion.div>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative group">
          <button
            onClick={toggleDarkMode}
            className={`w-full flex items-center ${
              isCollapsed && !isMobile ? "justify-center" : "justify-between"
            } p-2 rounded-lg ${
              isDarkMode ? "hover:bg-gray-700/30" : "hover:bg-white/5"
            } transition-colors`}
          >
            <div className="flex items-center space-x-3">
              {isDarkMode ? <FaSun /> : <FaMoon />}
              {(!isCollapsed || isMobile) && <span>Dark Mode</span>}
            </div>
            {(!isCollapsed || isMobile) && (
              <div
                className={`h-5 w-9 rounded-full p-0.5 ${
                  isDarkMode ? "bg-gray-600" : "bg-indigo-700"
                }`}
              >
                <motion.div
                  className="h-4 w-4 bg-white rounded-full"
                  animate={{ x: isDarkMode ? 16 : 0 }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                />
              </div>
            )}
          </button>
          {isCollapsed && !isMobile && (
            <div className="absolute left-full ml-2 px-2 py-0 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
              Dark Mode
            </div>
          )}
        </div>
      </motion.div>

      {/* Logout Button */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative group">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className={`w-full ${
              isDarkMode
                ? "bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700"
                : "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
            } text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300`}
          >
            <FaSignOutAlt />
            {(!isCollapsed || isMobile) && <span className="ml-2">Logout</span>}
          </motion.button>
          {isCollapsed && !isMobile && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
              Logout
            </div>
          )}
        </div>
      </motion.div>
      {/* Footer */}
      <div
        className={`text-sm text-center ${
          isDarkMode ? "text-gray-400" : "text-purple-300"
        } mt-6 pt-4 border-t ${
          isDarkMode ? "border-gray-700" : "border-white/10"
        } ${isCollapsed && !isMobile ? "text-center" : ""}`}
      >
        {(!isCollapsed || isMobile) && <p>Rabbit Admin v2.0</p>}
        <p>© {new Date().getFullYear()}</p>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;
