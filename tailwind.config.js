/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      screens:{
        "mobile": "0px",
      },
      fontSize:{
        "xxs": ['10px','0.8rem']
      }
    },
    colors:{
      'darkmode-bg':'#1b1d24',
      'cmp-dg':'#365A08',
      'cmp-mg':'#5d9d0b',
      'cmp-lg':'#72eb3a',
      'red':'#FF0000',
      'grey': '#1f2937',
      'white': '#FFFFFF',
      'lightgrey':"#D3D3D3"
    },
  },
  plugins: [],
}

