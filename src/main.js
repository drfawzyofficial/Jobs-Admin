// Import Methods, Packages, Files
import { createApp } from 'vue';
import App from "./App.vue";
import { router } from './router';
import { store } from './store'
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import 'regenerator-runtime/runtime';
import GLoader from './components/g_loader.vue'
import LLoader from './components/l_loader.vue'
import AdminLayout from './components/AdminLayout.vue'
import jquery from 'jquery';
import Multiselect from '@vueform/multiselect'
import "@vueform/multiselect/themes/default.css"
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/material.css';
import './assets/css/bootstrap.rtl.min.css';
import './assets/css/style.css';

// Declarations
window.$ = jquery
const app = createApp(App)

// @Language-Logic
app.component("Bootstrap5Pagination ", Bootstrap5Pagination );
app.component('GLoader', GLoader);
app.component('LLoader', LLoader);
app.component('AdminLayout', AdminLayout);
app.component('Multiselect', Multiselect);
// @App-Use
app.use(router)
app.use(store)
  .mount('#app');