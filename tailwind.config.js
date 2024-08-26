/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
      extend: {
          fontFamily: {
              bose_regular: ['bose-regular'],
              bose_black: ['bose-headBlack'],
              bose_medium: ['bose-medium'],
              bose_bold: ['bose-headBold'],
              bose_Tbold: ['bose-bold']
          },
          colors: {
              grayish: '#EEE8E5',
              bluish: '#486E8A',
              brownish: '#928982',
              purpleish: '#C5C6E1',
              light_bluish: '#A2C2D9',
              link: '#005BFF',
              hover_link: '#1F6698',
              blackish: '#131317'
          }
      },
  },
  plugins: [],
}