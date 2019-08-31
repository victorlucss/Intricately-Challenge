import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import CompanyPage from '../pages/CompanyPage.vue';



export default new Router({
  routes: [
    {
      path: '',
      name: 'CompanyPage',
      component: CompanyPage
    }
  ]
});