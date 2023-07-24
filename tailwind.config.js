// eslint-disable-next-line @typescript-eslint/no-var-requires
const konstaConfig = require('konsta/config')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = konstaConfig({
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
})
