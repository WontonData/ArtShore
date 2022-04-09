module.exports = {
  mode: 'jit',
  purge: {
    content: ['public/index.html', './src/**/*.{vue,js,ts,jsx,tsx,wxml}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  minHeight: {
    '0': '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    'full': '100%',
    '1': '0.25rem',
    '2': '0.5rem',
    '4': '1rem',
    '8': '2rem',
    '16': '4rem'
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false
  }
}