const aside = [
  {
    path: '/home_page/:id?',
    meta: { title: '主页', icon: 'el-icon-house' },
    component: () => import('../views/aside/Homepage.vue')
  },
  {
    meta: { title: '用户', icon: 'el-icon-user' },
    children: [
      {
        path: '/user_list',
        meta: { title: '用户列表' },
        component: () => import('../views/aside/UserList.vue')
      },
      {
        path: '/user_add',
        meta: { title: '新增用户' },
        component: () => import('../views/aside/AddUser.vue')
      }
    ]
  },
  {
    meta: { title: '图片库', icon: 'el-icon-picture-outline' },
    children: [
      {
        path: '/img_list',
        meta: { title: '图片列表' },
        component: () => import('../views/aside/ImgList.vue')
      },
      {
        path: '/upload_img',
        meta: { title: '上传图片' },
        component: () => import('../views/aside/UploadImg.vue')
      }
    ]
  },
  {
    path: '/log',
    meta: { title: '信息', icon: 'el-icon-chat-square' },
    component: () => import('../views/aside/Log.vue')
  },
  {
    path: '/set',
    meta: { title: '设置', icon: 'el-icon-setting' },
    component: () => import('../views/aside/Set.vue')
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
