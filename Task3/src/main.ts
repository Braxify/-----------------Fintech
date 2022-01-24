import { createApp } from 'vue'
import App from './App.vue'
// Router
import router from '@/router/index'
// State management
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// Tailwind
import '@/assets/styles/main.css'

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(router)

app.mount('#app')
