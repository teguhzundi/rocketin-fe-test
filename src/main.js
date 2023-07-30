import './assets/base.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
  faClose,
  faVenus,
  faMars,
  faFlag,
  faUsers,
  faPersonWalking
} from '@fortawesome/free-solid-svg-icons'

library.add(faClose, faVenus, faMars, faFlag, faUsers, faPersonWalking)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
