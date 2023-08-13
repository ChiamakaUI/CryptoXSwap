/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        primary: '#29125E',
        // white: "#FFF", 
        // black: "#000",
      },
    },

  },
  plugins: [],
}

// const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = withMT({
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       // backgroundImage: {
//       //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//       //   'gradient-conic':
//       //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       // },
//     },
//     colors: {
//       primary: '#29125E'
//     },
//     fontFamily: {

//     }
//   },
//   plugins: [],
// })