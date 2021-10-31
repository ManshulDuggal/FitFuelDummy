module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                // wiggle: {
                //     "0%,100%": {
                //         transform: "rotate(90deg)",
                //     },
                //     "100%": {
                //         transform: "rotate(90deg)",
                //     },
                // },
            },
            animation: {
                wiggle: "wiggle 2s rotate-180 ease-in",
            },
        },
    },
    variants: {},
    plugins: [],
};
