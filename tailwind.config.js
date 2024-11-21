/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Navbar: '#221F76',
        TabColor:'#52EAFF',
        BackgroundColor:'#C4B4B4',
        textColor1: '#008000',
        textColor2: '#FF0000',
        textColor3: '#A4A29D',
        textColor4: '#000000',
        textColor5: '#343434',
        textColor6: '#222075',
        PlaceholderColor: '#7F909F',
        InputFieldColor: '#F8F7FB',
        NavButtonBg: '#52EAFF',
      },
    },
  },
  plugins: [],
}