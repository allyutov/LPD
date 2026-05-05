import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:authPage(login|registration)?',
    redirect: (to) => `/auth/${(to.params.authPage as string) || 'login'}`,
  },
  {
    path: '/auth',
    meta: { requiresGuest: true },
    component: () => import('@/widgets/auth-layout/ui/auth-layout.vue'),
    children: [
      { path: '', redirect: '/auth/login' },
      { path: 'login', component: () => import('@/pages/auth/ui/login.vue') },
      { path: 'registration', component: () => import('@/pages/auth/ui/registration.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('@/widgets/base/ui/base-layout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', component: () => import('@/pages/dashboard/index.vue') },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => (localStorage.getItem('user') ? '/' : '/auth/login'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const isAuth = !!localStorage.getItem('user');

  if (to.meta.requiresAuth && !isAuth) {
    return '/auth/login';
  }

  if (to.meta.requiresGuest && isAuth) {
    return '/dashboard';
  }

  return true;
});