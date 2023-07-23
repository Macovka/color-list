import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import AppCheckbox from '@/components/UI/AppCheckbox.vue'

const app = createApp(App)

app.component('app-checkbox', AppCheckbox)
app.use(store)
app.mount('#app')
