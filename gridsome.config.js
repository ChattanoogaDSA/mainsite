// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const dsaForestry = require('./plugins/dsa-forestry')

const postcssPlugins = [
  tailwind(),
]

module.exports = {
  siteName: 'Chattanooga DSA',
  icon: './src/assets/images/logo-dsa-color.png',
  plugins: [
    {
      use: dsaForestry,
    },
  ],
  templates: {
    Home: [
      {
        name: 'home',
        path: '/',
        component: './src/templates/Home.vue',
      },
    ],
    Topic: [
      {
        path: '/:name',
        component: './src/templates/Topic.vue'
      },
    ],
    Article: [
      {
        path: '/article/:name',
        component: './src/templates/Article.vue'
      },
    ],
    Event: [
      {
        path: '/event/:name',
        component: './src/templates/Event.vue'
      },
    ],
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  permalinks: {
    trailingSlash: false,
  }
}