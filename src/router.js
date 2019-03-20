import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/lyrics',
      name: 'lyrics',
      props: true,
      component: () => import('./views/Lyrics.vue'),
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
