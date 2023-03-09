import App from './app.vue'
import router from './router'
import { createApp } from 'vue'

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');