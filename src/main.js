import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import Toaster from '@meforma/vue-toaster';
import ToastOptions from './toast.js';

const Vue = createApp(App);
Vue.use(router);
Vue.use(Toaster, ToastOptions);
Vue.mount('#app');