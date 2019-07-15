import Vue from 'vue';
import Router from 'vue-router';
import FirstComponent from './components/FirstComponent.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/first',
      name: 'first_comp',
      component: FirstComponent,
    }
  ],
});