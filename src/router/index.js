import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Company from '../pages/Company.vue';
import CompanyPage from '../pages/CompanyPage.vue';
import CompanyData from '../pages/CompanyData.vue';

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'Company',
      component: Company,
      children: [
        {
          path: 'company-page',
          name: 'CompanyPage',
          component: CompanyPage
        },

        {
          path: 'company-data',
          name: 'CompanyData',
          component: CompanyData
        }
      ]
    },

    {
      path: '*',
      name: 'Error404',
      component: Company
    }
  ]
});