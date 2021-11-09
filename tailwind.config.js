module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {},
            animation: {
                wiggle: "wiggle 2s rotate-180 ease-in",
            },
        },
    },
    variants: {},
    plugins: [
        //scrollbar
        require("tailwind-scrollbar"),
    ],
};
