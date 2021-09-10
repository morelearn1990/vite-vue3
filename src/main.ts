import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */

import routes from 'virtual:generated-pages';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import App from './App.vue';
import './app.css';

const i18n = createI18n({
  locale: 'zh',
  messages,
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(createPinia());

app.mount('#app');
