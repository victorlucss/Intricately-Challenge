import Vue from 'vue';
import router from 'Router'
import App from './App.vue'
import 'Styles/intricately.scss';
import store from './store';
import { NavbarIntricately, FooterIntricately, SidenavIntricately, SidenavLinkIntricately, CardIntricately, GraphicIntricately, InputIntricately, ModalIntricately } from './components';

Vue.component('navbar-intricately', NavbarIntricately);
Vue.component('footer-intricately', FooterIntricately);
Vue.component('sidenav-intricately', SidenavIntricately);
Vue.component('sidenavlink-intricately', SidenavLinkIntricately);
Vue.component('card-intricately', CardIntricately);
Vue.component('graphic-intricately', GraphicIntricately);
Vue.component('input-intricately', InputIntricately);
Vue.component('modal-intricately', ModalIntricately);

new Vue({
  render: createElement => createElement(App),
  el: '#app',
  router,
  store,
}).$mount('#app');
