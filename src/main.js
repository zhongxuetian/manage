import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/index.css'
import funs from './assets/index.js'
// 引入echarts
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$funs = funs
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
