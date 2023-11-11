/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fcfcfd",
        black: "#242833",
        primary: {
          DEFAULT: "#4c1d95",
          1: "#e7dbf8",
          2: "#b694ea",
          3: "#854ddc",
          4: "#5b23b2",
          5: "#4c1d95",
        },
        secondary: {
          DEFAULT: "#713f12",
          1: "#f9e9da",
          2: "#edbd91",
          3: "#e29148",
          4: "#b7661d",
          5: "#6e3d12",
        },
        accent: {
          DEFAULT: "#1e3a8a",
          1: "#dce3f7",
          2: "#96ace8",
          3: "#5074d9",
          4: "#2649af",
          5: "#1e3a8a",
        },

        warning: {
          DEFAULT: "#ea860b",
          1: "#fdecd6",
          2: "#f9c585",
          3: "#f59f34",
          4: "#cb740a",
          5: "#ea860b",
        },
        error: {
          DEFAULT: "#d92635",
          1: "#f9dbdd",
          2: "#ec939a",
          3: "#df4a57",
          4: "#b5202c",
          5: "#d92635",
        },
        success: {
          DEFAULT: "#16ac93",
          1: "#d9faf5",
          2: "#8ef1e0",
          3: "#43e7cc",
          4: "#18bca1",
          5: "#16ac93",
        },
        infos: {
          DEFAULT: "#5172ec",
          1: "#d9e0fb",
          2: "#8ca2f2",
          3: "#3f64ea",
          4: "#1539c0",
          5: "#5172ec",
        },
      },
    },
  },
  plugins: [],
}
