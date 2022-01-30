import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';


createApp(App)
.use(BootstrapIconsPlugin)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"