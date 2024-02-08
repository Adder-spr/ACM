import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    }
  },
  {
    path: '/main',
    name: 'main',
    component: function () {
      return import('../views/MainView.vue')
    },
    // meta: {
    //   requireAuth:true
    // },
    redirect: '/main/ad_businesses',
    children: [
      {
        path: '/main/ad_businesses',
        component: function () {
          return import('../views/children/audit/auditBusinesses.vue')
        }
      },
      {
        path: '/main/ad_farmers',
        component: function () {
          return import('../views/children/audit/auditFarmers.vue')
        }
      },
      {
        path: '/main/ordersFin',
        component: function () {
          return import('../views/children/recording/orders_Finish.vue')
        }
      },
      {
        path: '/main/ordersPro',
        component: function () {
          return import('../views/children/recording/orders_Pro.vue')
        }
      },
      {
        path: '/main/ordersUnFin',
        component: function () {
          return import('../views/children/recording/orders_UnFin.vue')
        }
      },
      {
        path: '/main/sucLog',
        component: function () {
          return import('../views/children/log/sys/sucLog.vue')
        }
      },
      {
        path: '/main/failLog',
        component: function () {
          return import('../views/children/log/sys/failLog.vue')
        }
      },
      {
        path: '/main/warnLog',
        component: function () {
          return import('../views/children/log/sys/warnLog.vue')
        }
      },
      {
        path: '/main/errorLog',
        component: function () {
          return import('../views/children/log/sys/errorLog.vue')
        }
      },
      {
        path: '/main/personal',
        component: function () {
          return import('../views/children/personal/personal.vue')
        }
      }
    ]
  }
]


const router = new VueRouter({
  routes
})


//全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.fullPath.indexOf('/main') > -1) {
    let token = sessionStorage.getItem('token');
    if (token !== null && token !== '') {
      //token不为空则发请求查看此token是否是服务器签署的
      
      next();
    } else {
      Message({
        type: 'error',
        message:'身份过期,请重新登录!'
      })
      sessionStorage.clear();
      next('/login');
    }
  }else{
    next();
  }
})

export default router
