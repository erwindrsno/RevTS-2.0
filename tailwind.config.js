/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            bluegray: colors.slate,
            gray: colors.gray,
            lightblue: colors.sky,
            red: colors.red
        },
        extend: {
            fontFamily:{
                sans: ['Inter']
            }
        },
    },
    plugins: [],
}