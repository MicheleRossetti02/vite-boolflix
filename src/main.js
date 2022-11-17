import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './style.scss'
import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
