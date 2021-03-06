module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '15px 18px 6px 0px #26543FCC',
    },
    extend: {
      colors: {
        // kobe
        redbrown: {
          DEFAULT: '#892301FF',
        },
        cedar: {
          DEFAULT: '#C85C41FF',
        },
        salmon: {
          DEFAULT: '#EA9473FF',
        },
        apricot: {
          DEFAULT: '#FFC2A8FF',
        },
        // ochre
        orangebrown: {
          DEFAULT: '#C8752DFF',
        },
        // jasmine
        yellow: {
          DEFAULT: '#FEDA86FF',
        },
        // isabelline
        offwhite: {
          DEFAULT: '#EFEDE7FF',
        },
        // morning blue
        lightsage: {
          DEFAULT: '#86AC9BFF',
        },
        // brunswich green
        darksage: {
          DEFAULT: '#26543FFF',
        },
        // eerie black
        darkblack: {
          DEFAULT: '111615FF',
        },
        // purple-mountain-majesty
        purple: {
          DEFAULT: '#A276C4ff',
        },
      },
      backgroundImage: {
        background: 'url("/src/assets/QuickBackground.png")',
      },
    },
    fontFamily: {
      sans: ['Lora', 'serif'],
      heading: ['Staatliches', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
