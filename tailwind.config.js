// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed for your project
  ],
  theme: {
    extend: {
      colors: {
        customBeige: "#f4dac1", // Add your custom color with a descriptive name
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
