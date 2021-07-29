const aside = [
  {
    path: '/home_page',
    meta: { title: '主页', icon: 'el-icon-house' }
  },
  {
    meta: { title: '用户', icon: 'el-icon-user' },
    children: [
      {
        path: '/user_list',
        meta: { title: '用户列表' }
      },
      {
        path: '/user_add',
        meta: { title: '新增用户' }
      }
    ]
  },
  {
    meta: { title: '图片库', icon: 'el-icon-picture-outline' },
    children: [
      {
        path: '/img_list',
        meta: { title: '图片列表' }
      },
      {
        path: '/upload_img',
        meta: { title: '上传图片' }
      }
    ]
  },
  {
    path: '/log',
    meta: { title: '日志', icon: 'el-icon-chat-square' }
    // children: [
    //   {
    //     path: '/user_log',
    //     meta: { title: '登录日志' }
    //   },
    //   {
    //     path: '/upload_img_log',
    //     meta: { title: '图片上传日志' }
    //   },
    //   {
    //     path: '/uppower_log',
    //     meta: { title: '权限修改日志' }
    //   }
    // ]
  },
  {
    path: '/set',
    meta: { title: '设置', icon: 'el-icon-setting' }
  },
  {
    path: '/drag',
    meta: { title: '拖拽', icon: 'el-icon-thumb' }
  }
]

const asideModule = {
  state: () => ({
    aside
  })
}

module.exports = asideModule
