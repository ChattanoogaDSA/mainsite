// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/styles/index.css'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons'
config.autoAddCss = false;

export default function (Vue, { router, head, isClient }) {
  Vue.component('fa-icon', FontAwesomeIcon)
}
