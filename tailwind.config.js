// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           50: '#fff5f5',
//           100: '#ffe0e0',
//           200: '#ffc2c2',
//           300: '#ff9999',
//           400: '#ff6666',
//           500: '#ff3333',
//           600: '#e60000',
//           700: '#cc0000',
//           800: '#990000',
//           900: '#660000',
//           950: '#330000',
//         },
//         surface: {
// 50: '#f8f8f8',
// 100: '#f1f1f1',
// 200: '#e2e2e2',
// 800: '#2a2a2a',
//           900: '#1a1a1a',
//           950: '#0d0d0d',
//         },
//       },
//       fontFamily: {
//         sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
//       },
//       boxShadow: {
//         card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
//         elevated: '0 10px 40px -10px rgb(0 0 0 / 0.12)',
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {

    extend: {

      colors: {

        brand: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc2c2',
          300: '#ff9999',
          400: '#ff6666',
          500: '#ff3333',
          600: '#ff1c1c',
          700: '#d10b0b',
          800: '#990000',
          900: '#660000',
        },

        surface: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#e2e2e2',
          800: '#2a2a2a',
          900: '#111111',
          950: '#000000',
        }

      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        orbitron: ['var(--font-orbitron)'],
        ptsans: ['var(--font-ptsans)'],
      },

      backgroundImage: {

        hero: "url('/herobg.png')",

      },

      animation: {

        float: "float 5s ease-in-out infinite",
        fade: "fade 1s ease forwards",
        slowZoom: "slowZoom 15s linear infinite alternate",

      },

      keyframes: {

        float: {
          '0%,100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-12px)'
          }
        },

        fade: {
          from: {
            opacity: 0,
            transform: 'translateY(40px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },

        slowZoom: {
          from: {
            transform: 'scale(1)'
          },
          to: {
            transform: 'scale(1.05)'
          }
        }

      },

      boxShadow: {

        glow: '0 0 40px rgba(255,0,0,.15)',

      }

    }

  },

  plugins: [],

}