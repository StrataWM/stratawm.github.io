/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        tokyoNight: {
          "primary": "#2196F3",
          "secondary": "#c099ff",
          "accent": "#ff757f",
          "neutral": "#1b1d2b",
          "base-100": "#222436",
          "info": "#82aaff",
          "success": "#86e1fc",
          "warning": "#c3e88d",
          "error": "#ff757f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}