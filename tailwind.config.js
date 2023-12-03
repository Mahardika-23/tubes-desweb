/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

