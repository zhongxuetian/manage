import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import { routers } from '../router/aside'
import funs from '../assets/index'
Vue.use(VueRouter)
// console.log(routers)
const routes = [
  {
    path: '/',
    redirect: '/home_page',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      ...routers
    ]
  },
  {
    path: '/login',
    name: 'Home',
    component: () => import('../views/Login.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const username = funs.getCookie('username')
  console.log(to)
  if (username && to.path !== '/login') {
    next()
  } else if (username && to.path === '/login') {
    next('/')
  } else if (!username && to.path === '/login') {
    next()
  } else if (!username && to.path !== '/login') {
    next('/login')
  }
})
export default router
