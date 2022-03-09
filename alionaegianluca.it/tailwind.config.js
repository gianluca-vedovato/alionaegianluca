module.exports = {
  content: ['index.html'],
  purge: [
    './index.html',
    './app/**/*.js'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      green: '#5E7B5D',
      dove: '#F5F2EC',
      black: '#1c1b1a',
      white: '#ffffff'
    },
    fontSize: {
      xxs: '0.75rem',
      xs: '0.875rem',
      s: '1rem',
      m: '1.125rem',
      l: '2.5rem',
      xl: '3rem',
      xxl: '4.75rem',
      xxxl: '6rem'
    },
    extend: {
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 0.65)',
        'ease-out': 'cubic-bezier(0.218, 0.58, 0.36, 1)',
        'power-out': 'cubic-bezier(0.82, 0, 0.36, 1)',
        bounce: 'cubic-bezier(.17,.67,.3,1.33)'
      },
      transitionDuration: {
        600: '600ms',
        1200: '1200ms',
        1800: '1800ms',
        2500: '2500ms'
      }
    },
  },
  plugins: [],
}
