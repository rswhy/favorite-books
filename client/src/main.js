import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3StarRatings from "vue3-star-ratings";
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("vue3-star-ratings", vue3StarRatings);
app.mount('#app')