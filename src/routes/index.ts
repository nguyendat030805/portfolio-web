import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/login' 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/features/auth/pages/LoginPages.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/features/auth/pages/RegisterPage.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/auth/callback',
    name: 'auth-callback',
    component: () => import('@/features/auth/pages/AuthCallback.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/features/profile/pages/Home.vue'),
    meta: { requiresAuth: true }
  },
    {
    path: '/profile',
    name: 'profile',
    component: () => import('@/features/profile/pages/ProfilePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/core/pages/NotFoundPage.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/features/project/pages/ProjectPage.vue'),
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } 
  else {
    next();
  }
});

export default router;