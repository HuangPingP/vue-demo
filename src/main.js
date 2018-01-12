
import Vue from 'vue'
import Router from 'vue-router'

import App from './App'

import routes from './router/routers'

Vue.use(Router)

let router = new Router({
  routes
})

window.router = router

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
