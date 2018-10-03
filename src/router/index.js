import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/arch/Layout.vue';
import Login from '@/app/Login/Login.vue';
import LoginService from '@/services/LoginService';

import routes from './routes';

Vue.use(Router);

const notFound = {
  path: '*',
  name: 'NotFound',
  component: () => import('@/app/NotFound/NotFound'),
  meta: {
    domain: 'NotFound',
    sidebar: false,
    title: 'Não encontrado',
  },
};

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Layout,
      children: routes,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      component: Layout,
      children: [notFound],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = LoginService.obterToken();

  if (!token && to.name !== 'login') {
    return next('/login');
  }

  if (token && (to.name === 'login' || to.fullPath === '/')) {
    return next('/employee');
  }


  if (to.fullPath === '/') {
    return next('/employee');
  }

  return next();
});

export default router;
