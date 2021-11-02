import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // router is for mapping a given path to a Vue component

//createApp(App).mount('#app')

createApp(App).use(router).mount('#app')
