import Vue from 'vue';
import router from 'Router'
import App from './App.vue'
import 'Styles/intricately.scss';
import store from './store';
import { NavbarIntricately, FooterIntricately, SidenavIntricately, SidenavLinkIntricately } from './components';

Vue.component('navbar-intricately', NavbarIntricately);
Vue.component('footer-intricately', FooterIntricately);
Vue.component('sidenav-intricately', SidenavIntricately);
Vue.component('sidenavlink-intricately', SidenavLinkIntricately);





new Vue({
  render: createElement => createElement(App),
  el: '#app',
  router,
  store,
}).$mount('#app');
