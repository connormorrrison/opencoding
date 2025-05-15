// tailwind.config.js
module.exports = {
  darkMode: ['class'],   // ← use `class` strategy
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
}
