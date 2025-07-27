/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#e51f1f',
        'custom-red-hover': '#9f0000',
        'custom-dark-gray': '#0d3d56',
        'custom-darker-gray': '#093145',
      }
    },
  },
  plugins: [],
}



// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'custom-red': '#e51f1f',
//         'custom-red-hover': '#9f0000',
//         'custom-dark-gray': '#0d3d56',
//         'custom-darker-gray': '#093145',
//       }
//     }
//   }
// }