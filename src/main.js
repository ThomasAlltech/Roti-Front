import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import ListeUnivers from './pages/ListeUnivers.vue'
import CreateRoti from './pages/RotiCreate.vue'

createApp(App)
.use(router)
.use(ListeUnivers)
.use(CreateRoti)
.mount('#app')
