import Vue from 'vue';
import App from './App.vue';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: Store
}).$mount('#app')
