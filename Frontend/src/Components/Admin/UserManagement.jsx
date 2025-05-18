import React from "react";
import { motion } from "framer-motion";
import { HiUserGroup, HiOutlineTrash } from "react-icons/hi";
import { FaUserShield, FaUser, FaUserAlt } from "react-icons/fa";

const UserManagement = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const users = [
    {
      _id: 123,
      name: "John David",
      email: "sheraz@gmail.com",
      role: "admin",
    },

    {
      _id: 124,
      name: "Sheraz",
      email: "sheraz@gmail.com",
      role: "customer",
    },

    {
      _id: 125,
      name: "John Doe",
      email: "sheraz@gmail.com",
      role: "customer",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User added:", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleRoleChange = (newRole, userId) => {
    console.log(`Role of user with ID: ${userId} changed to ${newRole}`);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      console.log(`Deleting user with ID: ${userId}`);
    }
  };

  // Generate random avatar color based on user name
  const getAvatarColor = (name) => {
    const colors = [
      "bg-purple-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8 px-6">
        <h1 className="text-2xl sm:text-3xl flex items-center justify-center gap-3 md:text-4xl font-bold text-center mb-4 text-emerald-700 animate-bounce">
          User Management!
          <FaUserAlt className="text-emerald-500" />
        </h1>
        <p className="text-lg text-green-600 font-medium">
          Manage all users from this page.
        </p>
      </div>

      {/* Add new User Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100"
      >
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <FaUser className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Add New Users
          </h2>{" "}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Role
              </label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <select
                  name="role"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r w-1/2 md:w-1/3 from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-200"
              type="submit"
            >
              Add User
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* User List Management */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="relative p-2 mb-4"
            >
              <HiUserGroup className="text-4xl text-purple-500 z-10 relative" />
              <div className="absolute inset-0 rounded-full bg-purple-100 animate-pulse"></div>
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              All Users
            </h2>
            <p className="text-gray-500">{users.length} registered users</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200  text-lg text-center font-medium text-black uppercase">
                <tr>
                  <th className="py-4 px-6 tracking-wider">User</th>
                  <th className="py-4 px-6  tracking-wider">Email</th>
                  <th className="py-4 px-6  tracking-wider">Role</th>
                  <th className="py-4 px-6 tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {users.map((user) => (
                  <motion.tr
                    key={user._id}
                    className="group relative text-center"
                  >
                    <td className="px-6 py-2 whitespace-nowrap ">
                      <div className="flex items-center">
                        <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        <div
                          className={`flex-shrink-0 h-10 w-10 rounded-full ${getAvatarColor(
                            user.name
                          )} flex items-center justify-center text-white`}
                        >
                          {user.role === "admin" ? (
                            <FaUserShield className="w-5 h-5" />
                          ) : (
                            <FaUser className="w-5 h-5" />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        name="role"
                        value={user.role.toLowerCase()}
                        className={`text-sm ${
                          user.role === "admin"
                            ? "text-purple-600 bg-purple-50"
                            : "text-gray-600 bg-gray-50"
                        } px-3 py-1 rounded-lg focus:outline-none cursor-pointer  focus:ring-1 focus:ring-blue-500`}
                        onChange={(e) =>
                          handleRoleChange(e.target.value, user._id)
                        }
                      >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-red-500 hover:text-red-700 hover:bg-red-300  mr-3 flex px-4 py-2 rounded-lg transition duration-100 ease-in-out"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        <HiOutlineTrash className="w-5 h-5" />
                        <span className="ml-1">Delete</span>
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserManagement;
