import tailwind from 'tailwindcss'
import tailwindCSSNesting from 'tailwindcss/nesting'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'

import tailwindConfig from './tailwind.config.js'

export default {
    plugins: [
        postcssImport,
        tailwindCSSNesting,
        tailwind(tailwindConfig),
        autoprefixer,
    ],
}
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // Add other PostCSS plugins here if needed
    },
};
