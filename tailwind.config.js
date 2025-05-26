/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        sider: "calc(15% - 1rem)",
      },
      minHeight: {
        content: "calc(100vh - 5rem)",
      },
      height: {
        content: "calc(100vh - 5rem)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: "var(--theme-color)",
      },
      backgroundColor: {
        "theme-nav": "rgba(var(--background-rgb), 0.5)",
      },
      borderWidth: {
        "theme-w": "var(--nav-border-width)",
      },
      borderColor: {
        "theme-c": "var(--nav-border-color)",
      },
      boxShadow: {
        theme: "var(--nav-box-shadow)",
      },
      aspectRatio: {
        "video-vertical": "9 / 16",
      },
    },
  },
  plugins: [],
};
