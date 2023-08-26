/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      sm: '480px',
      md: '600px',
      mdlg: '800px',
      lg: '976px',
      lgx: '1200px',
      xl: '1440px',
    },
    fontFamily: {
      base: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        base: '#FFFFFF',
        baseTwo: '#D9D9D9',
        primary: '#012C7A',
        secondary: '#00BE9D',
        primaryShade: '#C0DDF9',
        panelDark: '#213555',
        panelLight: '#19376D',
      },
    }
  },
  plugins: [],
}

