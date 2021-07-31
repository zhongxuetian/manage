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
  inserted (el, d) {
    const oDiv1 = el.parentElement
    const oMove = el.querySelector('.move')
    oDiv1.style.position = 'relative'
    el.style.position = 'absolute'
    console.log(oDiv1)
    function getStyle (obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr]
      } else {
        return getComputedStyle(obj, null)[attr]
      }
    }
    oMove.onmousedown = function (ev) {
      var oEvent = ev || event
      // var disX = oEvent.clientX - el.offsetLeft;
      // var disY = oEvent.clientY - el.offsetTop;
      var disX = oEvent.clientX - parseInt(getStyle(el, 'left'))
      var disY = oEvent.clientY - parseInt(getStyle(el, 'top'))

      document.onmousemove = function (ev) {
        var oEvent = ev || event
        var l = oEvent.clientX - disX
        var t = oEvent.clientY - disY

        if (l < 0) {
          l = 0
        } else if (l > oDiv1.offsetWidth - /* parseInt(getStyle(el,'width')) */el.offsetWidth) {
          l = oDiv1.offsetWidth - el.offsetWidth
        }
        if (t < 0) {
          t = 0
        } else if (t > oDiv1.offsetHeight - el.offsetHeight) {
          t = oDiv1.offsetHeight - el.offsetHeight
        }
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }

      document.onmouseup = function () {
        document.onmousemove = null// 如果不取消，鼠标弹起div依旧会随着鼠标移动
        document.onmouseup = null
      }
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
