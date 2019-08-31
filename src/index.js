import Vue from 'vue';
import 'Styles/intricately.scss';

import { NavbarIntricately } from './components'

Vue.component('navbar-intricately', NavbarIntricately);

import App from './App.vue'

import router from 'Router'

new Vue({
  render: createElement => createElement(App),
  el: '#app',
  router,
});
