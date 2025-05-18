export default {
  content: [
    "./index.html", // Includes your root HTML file
    "./src/**/*.{html,js,ts,jsx,tsx}", // Includes all files with these extensions in the src folder
  ],
  theme: {
    extend: {
      colors: {
        "rabbit-red": "#ea2e0e", // Custom color for the rabbit red theme
      }, // You can customize the theme here if needed
    },
  },

  plugins: [], // Add plugins if you're using any
};
