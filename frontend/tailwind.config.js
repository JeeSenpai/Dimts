module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js',],
  theme: {
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
    },
    extend: {
      maxHeight: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
