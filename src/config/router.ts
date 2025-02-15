import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/**
 * # 路由配置
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '登录',
    component: () => import('@/view/login.vue'),
  },
  {
    path: '/reload',
    name: '重启',
    component: () => import('@/view/reload.vue'),
  },
  {
    path: '/shutDown',
    name: '关机',
    component: () => import('@/view/shutDown.vue'),
  },
  {
    path: '/main',
    name: '主页面',
    component: () => import('@/view/main.vue'),
  },
  {
    path: '/photoWall',
    name: '照片墙',
    component: () => import('@/view/photoWall.vue'),
  },
]

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
