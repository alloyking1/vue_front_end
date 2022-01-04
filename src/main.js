import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import bootstrap from 'bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  // bootstrap,
  render: h => h(App),
}).$mount('#app')
