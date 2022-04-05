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
      yellow: '#f4ba10',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      kings: '#e22319',
      gkt: '#f4ba10',
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
          primary: '#e22319',
          navy: '#0C2F46',
          secondary: '#502669',
          accent: '#f4ba10',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#e22319',
          error: '#F87272',
          kings: '#e22319',
          gkt: '#f4ba10',
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
