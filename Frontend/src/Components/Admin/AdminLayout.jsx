import React from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle Button - Fixed at top */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white fixed top-0 left-0 right-0 z-30 shadow-md">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <FaBars className="text-2xl" />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Overlay - Only visible when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar - Sticky on both mobile and desktop */}
      <div
        className={`fixed md:sticky top-0 left-0 w-64 h-screen bg-white text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 z-20`}
      >
        <AdminSidebar />
      </div>

      {/* Main Content - Adjusted for fixed header on mobile */}
      <div className="flex-grow p-6 overflow-auto mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;