/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: '#1fb6ff',
      purple: '#502669',
      pink: '#EE7D79',
      orange: '#e6582A',
      green: '#15847F',
      yellow: '#F49E25',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      kings: '#e1251c',
      gkt: '#f49e25',
      black: 'black',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        kclsu: {
          white: '#FFFFFF',
          primary: '#e1251c',
          navy: '#0C2F46',
          secondary: '#502669',
          accent: '#F49e25',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#E1251c',
          error: '#F87272',
          kings: '#E1251c',
          gkt: '#F49e25',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: 'dark',
  },
};
