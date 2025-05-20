// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ← 告訴 Tailwind 掃描這些檔案找 class
  ],
  theme: {
    extend: {}, // ← 你可以自訂樣式用這個
  },
  plugins: [], // ← 這裡之後可以加元件插件
}
