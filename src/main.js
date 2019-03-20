import Vue from 'vue';
import './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './styles/global.scss';

Vue.config.productionTip = false;

Vue.prototype.$color = [
  'indigo', 'red', 'pink', 'purple', 'cyan', 'teal', 'green', 'amber', 'blue-grey', 'deep-orange',
];

library.add(faHome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
