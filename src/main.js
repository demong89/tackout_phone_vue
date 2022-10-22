import {createApp} from 'vue'
import routes from './router/router'
import store from './store/'
import App from './App.vue'
import './config/rem'



createApp(App).use(store).use(routes).mount('#app')


