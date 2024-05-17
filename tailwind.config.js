const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content()
],
// add inter font globally
theme: {
  extend: {       
    colors:{
      primary:{
        50: '#ecebfe',
        100:'#c3bffb',
        200:'#a7a1f9',
        300:'#7e76f6',
        400: '#655bf4',
        500: '#3f32f1',
        600: '#392edb',
        700: '#2d24ab',
        800: '#231c85',
        900: '#1a1565',
      },
      secondary:{
        50: '#f5e6f9',
        100:'#dfb1ed',
        200:'#d08be5',
        300:'#ba55d9',
        400: '#ad35d1',
        500: '#9802c6',
        600: '#8a02b4',
        700: '#6c018d',
        800: '#54016d',
        900: '#400153',
      },
      sysNeutral:{
        white: '#FFFFFF',
        50: '#f5f5f5',
        100:'#e1e1e1',
        200:'#d2d2d2',
        300:'#bebebe',
        400: '#b1b1b1',
        500: '#9e9e9e',
        600: '#909090',
        700: '#707070',
        800: '#575757',
        900: '#0B0B0B',
        black: '#000000',
      },
      sysBlue:{
        50: '#EBF5FB',
        100:'#C0DFF4',
        200:'#A2D0EE',
        300:'#77BAE7',
        400: '#5DADE2',
        500: '#3498DB',
        600: '#2F8AC7',
        700: '#256C9B',
        800: '#1D5478',
        900: '#16405C',
      },
      sysGreen:{
        50: '#ECF9EC',
        100:'#C5ECC3',
        200:'#A9E2A5',
        300:'#82D57C',
        400: '#69CD63',
        500: '#44C13C',
        600: '#3EB037',
        700: '#30892B',
        800: '#256A21',
        900: '#1D5119',
      },
      sysRed:{
        50: '#FFEEEB',
        100:'#FFC9C2',
        200:'#FFAFA4',
        300:'#FF8A7B',
        400: '#FF7461',
        500: '#FF513A',
        600: '#E84A35',
        700: '#B53A29',
        800: '#8C2D20',
        900: '#6B2218',
      },        
      sysYellow:{
        50: '#FFFAE7',
        100:'#FFF0B5',
        200:'#FFE991',
        300:'#FFDF5E',
        400: '#FFD93F',
        500: '#FFCF0F',
        600: '#E8BC0E',
        700: '#B5930B',
        800: '#8C7208',
        900: '#6B5706',
      },
      text:{
        default:'#0B0B0B',
        subtle:'#707070',
        primary:'#3f32f1',
        secondary:'#9802c6',
        link: '#3f32f1',
        disabled: '#9e9e9e',
        success: '#44C13C',
        warning: '#FFCF0F',
        error: '#FF513A',
        inverted: '#ffffff'
      },
      icon:{
        default:'#0B0B0B',
        subtle:'#707070',
        primary:'#3f32f1',
        secondary:'#9802c6',
        link: '#3f32f1',
        disabled: '#9e9e9e',
        success: '#44C13C',
        warning: '#FFCF0F',
        error: '#FF513A',
        inverted: '#ffffff'
      },
      surface:{
        default:'#0B0B0B',
        subtle:'#707070',
        primary:'#3f32f1',
        secondary:'#9802c6',
        link: '#3f32f1',
        disabled: '#9e9e9e',
        success: '#44C13C',
        warning: '#FFCF0F',
        error: '#FF513A',
        inverted: '#ffffff'
      },
      border:{
        default:'#BEBEBE',
        disabled:'#E1E1E1',
        primary:'#3f32f1',
        secondary:'#9802c6',
        link: '#3f32f1',
        focus: '#9e9e9e',
        info: '#3498DB',
        success: '#44C13C',
        warning: '#FFCF0F',
        error: '#FF513A',
        inverted: '#ffffff'
      }
    }
  },
},
  plugins: [
    flowbite.plugin()
  ],
}

