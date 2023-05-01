/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
             // add required value here
          }
        } },
      colors: {
        'french-pass': {
          '50': '#eff6ff',
          '100': '#dcebfd',
          '200': '#b0d4fc',
          '300': '#95c8fb',
          '400': '#63a9f7',
          '500': '#3f88f2',
          '600': '#296be7',
          '700': '#2155d4',
          '800': '#2146ac',
          '900': '#203e88',
          '950': '#182853',
      },
    }
    },

    fontFamily: {
      sans: ['Montserrat', 'sans-serif', ],
      serif: ['Cormant Infant'],
      blog: ['Hind Guntur']

    }
    
  },
  plugins: [require('@tailwindcss/typography')],
}

