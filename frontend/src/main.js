import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(VueAxios, axios)
.use(BootstrapIconsPlugin)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"