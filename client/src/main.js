import Vue from 'vue';
import App from './App.vue';
import router from './router';
//import store from './store';
import vuetify from './plugins/vuetify';
import Navbar from 'components/layout/Navbar.vue';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  components: {
    'Navbar': Navbar
  }
}).$mount('#app')

