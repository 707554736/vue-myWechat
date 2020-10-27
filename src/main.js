import Vue from 'vue'
// import axios from "axios"
// import VueAxios from "vue-axios"
import {Icon, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vuex from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.use(vuex)
Vue.use(Icon, Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
