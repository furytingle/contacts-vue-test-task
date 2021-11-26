import {createApp} from 'vue';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import {router} from "./router/routes";
import store from "./store";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
