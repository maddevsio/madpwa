// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import vueHljs from 'vue-hljs';
import VueScrollTo from 'vue-scrollto';
import 'vue-hljs/dist/vue-hljs.min.css';
import VueI18n from 'vue-i18n';
import messages from './local';
import App from './App';

// import router from './router';

// Import components
import Header from './components/Header';
import Banner from './components/Banner';
import Libs from './components/Libs';
import About from './components/About';
import Features from './components/Features';
import ListLibs from './components/ListLibs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

Vue.config.productionTip = false;
// Vue.use(Vuetify, {
//   theme: {
//     primary: '#4a4a4a',
//     secondary: '#ffd31b',
//   },
//   options: {
//     themeVariations: ['primary', 'secondary'],
//   },
// });

Vue.use(vueHljs);
Vue.use(VueScrollTo);
Vue.use(VueI18n);

// Use component
Vue.component('Header', Header);
Vue.component('Banner', Banner);
Vue.component('Libs', Libs);
Vue.component('About', About);
Vue.component('Features', Features);
Vue.component('ListLibs', ListLibs);
Vue.component('ContactUs', ContactUs);
Vue.component('Footer', Footer);

const i18n = new VueI18n({
  locale: 'ru',
  messages,
});

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  // router,
  template: '<App/>',
  components: { App },
});
