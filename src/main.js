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

Vue.directive('drag', {
  bind (el, d) {
    el.ondragenter = function (ev) {
      d.value.d.push(1)
      ev.preventDefault()
      // var data = ev.dataTransfer.getData('text')
      // ev.target.appendChild(document.getElementById(data))
    }
    el.onallowDrop = function (ev) {
      ev.preventDefault()
    }
  }
})
Vue.prototype.$echarts = echarts
Vue.prototype.$funs = funs
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
