import Vue from 'vue';
import 'Styles/intricately.scss';

import { NavbarIntricately, FooterIntricately, SidenavIntricately, SidenavLinkIntricately } from './components';

Vue.component('navbar-intricately', NavbarIntricately);
Vue.component('footer-intricately', FooterIntricately);
Vue.component('sidenav-intricately', SidenavIntricately);
Vue.component('sidenavlink-intricately', SidenavLinkIntricately);

import App from './App.vue'

import router from 'Router'

new Vue({
  render: createElement => createElement(App),
  el: '#app',
  router,
}).$mount('#app');
