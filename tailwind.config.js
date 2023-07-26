/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./resources/**/*.{vue,html}'],
    },

}

