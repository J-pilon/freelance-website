const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/javascripts/**/*.{js,ts}",
    "./app/javascript/**/*.{js,ts,jsx,tsx}",
    "./app/views/**/*.{html,erb}",
    "./app/components/**/*.{html.erb,rb}",
  ],
  theme: {
    fontSize: {
      sm: ".5rem",
      md: ".75rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.75rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "background-black": "#030712",
        "background-navy": "#111827",
        "gray-50": "#f9fafb",
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-300": "#d1d5db",
        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "gray-600": "#4b5563",
        "gray-700": "#374151",
        "gray-800": "#1f2937",
        "gray-900": "#111827",
        "gray-950": "#030712",
        primary: "#FFD701",
        secondary: "#ADD8E6",
        // Uncomment to restore legacy colors
        // 'light': '#FFFAF4',
        // 'gray': '#C6C6C6',
        // 'light-gray': '#F5F5F5',
        // 'primary': '#005B60',
        // 'secondary': '#00ADAD',
        // 'accent': '#ABABAB',
        // 'background': '#000000',
        // 'background': '#274472',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};