import { createApp } from 'vue'
import App from './App.vue'

// Plugins
import faIcons from '@/plugins/fa-icons'

// Global styles
import './assets/app.scss'

// App
const app = createApp(App)

app.use(faIcons).mount('#app')
