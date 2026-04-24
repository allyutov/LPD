import { createApp } from 'vue';
import App from './index.vue';
import { router } from '@/app/router';

import './style.scss';

createApp(App).use(router).mount('#app');
