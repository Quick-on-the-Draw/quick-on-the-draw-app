module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                redbrown: {
                    DEFAULT: '#892301',
                },
                orangebrown: {
                    DEFAULT: '#C8752D',
                },
                yellow: {
                    DEFAULT: '#FEDA86',
                },
                offwhite: {
                    DEFAULT: '#EFEDE7',
                },
                lightsage: {
                    DEFAULT: '#86AC9B',
                },
                darksage: {
                    DEFAULT: '#26543F',
                },
                darkblack: {
                    DEFAULT: '111615',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
