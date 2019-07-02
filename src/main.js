import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'

import router from './router/router'

import './assets/css/base.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
