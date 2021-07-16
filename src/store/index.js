import Vue from 'vue'
import Vuex from 'vuex'
// import aside from './aside'
import mutations from './mutations'
import actions from './actions'
import asideModule from './modules/aside'
import userModule from './modules/user'
import logsModule from './modules/log'
import imgsModule from './modules/img'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    headerColor: '#409EFF'
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  modules: {
    asideModule,
    userModule,
    logsModule,
    imgsModule
  }
})
