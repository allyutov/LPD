import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './index.vue';
import { router } from '@/app/router';
import { worker } from '@/mocks/browser';

import './style.scss';

if (import.meta.env.DEV) {
  worker.start();
}

const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .use(router)
  .mount('#app');
