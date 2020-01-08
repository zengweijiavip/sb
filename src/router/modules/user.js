/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

// 用户管理路由模块
const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/user',
  // will always show the root menu
  // 总是显示根菜单
  alwaysShow: true,
  name: 'system',
  meta: {
    title: '用户管理',
    icon: 'system',
    // you can set roles in root nav
    // 可以在根导航中设置角色
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/user/user/index'),
      name: 'user',
      meta: {
        title: '用户管理',
        icon: 'email',
        // or you can only set roles in sub nav
        // 或者只在子导航中设置角色
        roles: ['admin']
      }
    },
    {
      path: 'role',
      component: () => import('@/views/user/role/index'),
      name: 'role',
      meta: {
        title: '角色管理',
        icon: 'dict'
        // if do not set roles, means: this page does not require permission
        // 如果不设置角色，意味着:此页面不需要权限
      }
    },
    {
      path: 'menu',
      component: () => import('@/views/user/menu/index'),
      name: 'menu',
      meta: {
        title: '菜单管理',
        icon: 'drag',
        roles: ['admin']
      }
    },
    {
      path: 'dept',
      component: () => import('@/views/user/dept/index'),
      name: 'dept',
      meta: {
        title: '部门管理',
        icon: 'language'
      }
    },
    {
      path: 'post',
      component: () => import('@/views/user/post/index'),
      name: 'post',
      meta: {
        title: '岗位管理',
        icon: 'fullscreen'
      }
    },
    {
      path: 'dict',
      component: () => import('@/views/user/dict/index'),
      name: 'dict',
      meta: {
        title: '字典管理',
        icon: 'message'
      }
    },
    {
      path: 'config',
      component: () => import('@/views/user/config/index'),
      name: 'config',
      meta: {
        title: '参数管理',
        icon: 'log'
      }
    },
    {
      path: 'notice',
      component: () => import('@/views/user/notice/index'),
      name: 'notice',
      meta: {
        title: '通知公告',
        icon: 'online'
      }
    }
  ]
}
export default userRouter
