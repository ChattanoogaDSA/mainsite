module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
    ],
    whitelist: [
      'body',
      'html',
      'img',
      'a',
      'g-image',
      'g-image--lazy',
      'g-image--loaded',
      'svg-inline--fa',
    ],
    whitelistPatterns: [
      /fa-$/,
      /fc-$/,
    ],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g),
        extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
      },
    ],
  },
  theme: {
    fontFamily: {
      sans: `'ManifoldDSA', 'Helvetica Neue', Arial, sans-serif`,
    },
    colors: {
      red: {
        100: '#EC1F27',
        80: '#F04C53',
        60: '#F4797E',
        40: '#F7A5A9',
        20: '#FBD2D4',
      },
      black: {
        100: '#231F20',
        80: '#413B3B',
        60: '#635C5D',
        40: '#8D8687',
        20: '#BDB8B8',
      },
      white: {
        100: '#FFFFFF',
      },
      transparent: 'rgba(0,0,0,0)',
    },
    extend: {
      fontSize: {
        'xxs': '.5rem',
      },
      listStyleType: {
        square: 'square',
        'lower-alpha': 'lower-alpha',
      },
      boxShadow (theme) {
        return {
          solid: `2px 2px 0 ${theme('colors.black.100')}`,
        }
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    margin: ['responsive', 'first'],
  },
  plugins: [],
}
