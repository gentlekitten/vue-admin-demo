import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Layout from '@/layout'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: 'login',
    hidden: true
  },
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login')
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    meta: {
      title: 'Example',
      icon: 'el-icon-document'
    },
    children:
      [
        {
          path: '/table',
          component: () => import('@/views/table'),
          meta: {
            title: 'table',
            breadcrumb: ['Example', 'table'],
            icon: 'el-icon-menu'
          }
        },
        {
          path: '/tree',
          component: () => import('@/views/tree'),
          meta: {
            title: 'tree',
            breadcrumb: ['Example', 'tree'],
            icon: 'el-icon-menu'
          }
        },
        {
          path: '/buttonPermission',
          component: () => import('@/views/buttonPermission'),
          meta: {
            title: 'buttonPermission',
            breadcrumb: ['Example', 'buttonPermission'],
            icon: 'el-icon-menu'
          }
        }
      ]
  },
  {
    path: '/form',
    component: Layout,
    meta: {
      title: 'Form',
      icon: 'el-icon-document-copy'
    },
    children: [
      {
        path: '/form',
        component: () => import('@/views/form'),
        meta: {
          title: 'form',
          breadcrumb: ['Form', 'form'],
          icon: 'el-icon-menu'
        }
      }
    ]
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu-1-1-1',
    meta: {
      title: 'Menu',
      icon: 'el-icon-s-management'
    },
    children: [
      {
        path: '/menu-1',
        meta: {
          title: 'menu-1',
          breadcrumb: ['Menu', 'menu-1'],
          role: ['admin', 'user']
          // icon: 'el-icon-menu'
        },
        component: () => import('@/views/menu/menu-1'),
        redirect: '/menu-1-1-1',
        children: [
          {
            path: '/menu-1-1',
            meta: {
              title: 'menu-1-1',
              breadcrumb: ['Menu', 'menu-1', 'menu-1-1'],
              role: ['admin', 'user']
              // icon: 'el-icon-menu'
            },
            component: () => import('@/views/menu/menu-1/menu-1-1'),
            redirect: 'menu-1-1-1',
            children: [
              {
                path: '/menu-1-1-1',
                meta: {
                  title: 'menu-1-1-1',
                  breadcrumb: ['Menu', 'menu-1', 'menu-1-1', 'menu-1-1-1'],
                  role: ['admin', 'user']
                },
                component: () => import('@/views/menu/menu-1/menu-1-1/menu-1-1-1')
              }
            ]
          }
        ]
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/home',
    component: Layout,
    redirect: '/welcome',
    meta: {
      title: '????????????',
      icon: 'el-icon-cpu'
    },
    children: [
      {
        path: '/welcome',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin', 'user'],
          icon: 'el-icon-menu'
        },
        component: () => import('@/views/welcome')
      },
      {
        path: '/powerManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin'],
          icon: 'el-icon-s-check'
        },
        component: () => import('@/views/powerManage')
      }
    ]
  },
  {
    path: '/power',
    component: Layout,
    redirect: '/powerManage',
    meta: {
      title: '????????????',
      icon: 'el-icon-s-check'
    },
    children: [
      {
        path: '/powerManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin']
        },
        component: () => import('@/views/powerManage')
      }
    ]
  },
  {
    path: '/roles',
    component: Layout,
    redirect: '/rolesManage',
    meta: {
      title: '????????????',
      icon: 'el-icon-s-cooperation'
    },
    children: [
      {
        path: '/rolesManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin']
        },
        component: () => import('@/views/rolesManage')
      }
    ]
  },
  {
    path: '/enterprise',
    component: Layout,
    redirect: '/enterpriseManage',
    meta: {
      title: '????????????',
      icon: 'el-icon-office-building'
    },
    children: [
      {
        path: '/enterpriseManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin']
        },
        component: () => import('@/views/enterpriseManage')
      }
    ]
  },
  {
    path: '/dept',
    component: Layout,
    redirect: '/deptManage',
    meta: {
      title: '????????????',
      icon: 'el-icon-s-grid'
    },
    children: [
      {
        path: '/deptManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin', 'user']
        },
        component: () => import('@/views/deptManage')
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/userManage',
    meta: {
      title: '????????????',
      icon: 'el-icon-s-custom'
    },
    children: [
      {
        path: '/userManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin', 'user']
        },
        component: () => import('@/views/userManage')
      }
    ]
  },

  {
    path: '/dict',
    component: Layout,
    redirect: '/dictManage',
    meta: {
      title: '????????????',
      icon: 'el-icon-s-management'
    },
    children: [
      {
        path: '/dictManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin', 'user'],
          icon: 'el-icon-menu'
        },
        component: () => import('@/views/dictManage')
      },
      {
        path: '/powerManage',
        meta: {
          title: '????????????',
          breadcrumb: ['????????????', '????????????'],
          role: ['admin'],
          icon: 'el-icon-s-check'
        },
        component: () => import('@/views/powerManage')
      }
    ]
  },
  {
    path: '/error',
    hidden: true,
    meta: {
      title: 'Error Page'
    },
    component: Layout,
    children: [
      {
        path: '/404',
        meta: { title: '404', noCache: true },
        component: () => import('@/views/404')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
/**
 * ??????????????????????????????????????????
 */
router.beforeEach((to, from, next) => {
  store.commit('breadcrumb', to.meta.breadcrumb)
  next()
})
// ????????????????????????????????????
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
