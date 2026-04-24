import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:authPage(login|registration)?',
    redirect: (to) => `/auth/${(to.params.authPage as string) || 'login'}`,
  },
  {
    path: '/auth',
    component: () => import('@/widgets/auth-layout/ui/auth-layout.vue'),
    children: [
      { path: '', redirect: '/auth/login' },
      { path: 'login', component: () => import('@/pages/auth/ui/login.vue') },
      { path: 'registration', component: () => import('@/pages/auth/ui/registration.vue') },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});