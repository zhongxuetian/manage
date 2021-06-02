const aside = [
  {
    path: '/home_page',
    meta: { title: '主页', icon: 'el-icon-s-home' },
    component: () => import('../views/aside/Homepage.vue')
  },
  {
    meta: { title: '用户', icon: 'el-icon-s-home' },
    children: [
      {
        path: '/user_list',
        meta: { title: '用户列表', icon: 'el-icon-s-home' },
        component: () => import('../views/aside/Homepage.vue')
      },
      {
        path: '/user_add',
        meta: { title: '新增用户', icon: 'el-icon-s-home' },
        component: () => import('../views/aside/Homepage.vue')
      }
    ]
  },
  {
    meta: { title: '图片库', icon: 'el-icon-s-home' },
    children: [
      {
        path: '/img_list',
        meta: { title: '图片列表', icon: 'el-icon-s-home' },
        component: () => import('../views/aside/Homepage.vue')
      },
      {
        path: '/upload_img',
        meta: { title: '上传图片', icon: 'el-icon-s-home' },
        component: () => import('../views/aside/Homepage.vue')
      }
    ]
  },
  {
    meta: { title: '信息', icon: 'el-icon-s-home' },
    children: [
      {
        path: '/user_log',
        meta: { title: '登录日志', icon: 'el-icon-s-home' },
        component: () => import('../views/aside/Homepage.vue')
      },
      {
        path: '/upload_img_log',
        meta: { title: '图片上传日志', icon: 'el-icon-s-home' },
        component: () => import('../views/aside/Homepage.vue')
      },
      {
        path: '/uppower_log',
        meta: { title: '权限修改日志', icon: 'el-icon-s-home' },
        component: () => import('../views/aside/Homepage.vue')
      }
    ]
  },
  {
    path: '/set',
    meta: { title: '设置', icon: 'el-icon-s-home' },
    component: () => import('../views/aside/Homepage.vue')
  }
]

var routers = []
for (let i = 0, len = aside.length; i < len; i++) {
  const o = aside[i]
  // console.log(Object.prototype.hasOwnProperty.call(o, 'children'))
  if (Object.prototype.hasOwnProperty.call(o, 'children') && o.children.length > 0) {
    routers = routers.concat(o.children)
  } else {
    routers.push(o)
  }
}

module.exports = { aside, routers }
