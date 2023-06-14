import './assets/css/tailwind.css'
import './assets/css/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
createApp(App).use(AOS.init({
  duration: 1000,
  once: true
})).use(VueScrollTo).mount('#app')
