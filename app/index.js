import Vue from 'vue'
import Router from 'vue-router'
// Workaround to suffice a problem in vue-brunch at the moment
import 'vueify/lib/insert-css'

import routes from './config/routes'
import routerHooks from './config/routes/hooks'
import App from './App'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
  saveScrollPosition: true
})

// Add the loginRequired hook before each state transition
router.beforeEach(routerHooks.loginRequired)

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
