import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
    path:'/main',
    name:'main',
    component: function() {
      return import('../views/MainView.vue')
    },
    redirect: "/main/ad_businesses",
    children: [
      {
        path:'/main/ad_businesses',
        component: function() {
          return import('../views/children/audit/audit_Businesses.vue')
        }
      },
      {
        path:'/main/ad_farmers',
        component: function() {
          return import('../views/children/audit/audit_Farmers.vue')
        }
      },
      {
        path:'/main/ordersFin',
        component: function() {
          return import('../views/children/recording/orders_Finish.vue')
        }
      },
      {
        path:'/main/ordersPro',
        component: function() {
          return import('../views/children/recording/orders_Pro.vue')
        }
      },
      {
        path:'/main/ordersUnFin',
        component: function() {
          return import('../views/children/recording/orders_UnFin.vue')
        }
      },
      {
        path:'/main/sucLog',
        component: function() {
          return import('../views/children/log/sys/sucLog.vue')
        }
      },
      {
        path:'/main/failLog',
        component: function() {
          return import('../views/children/log/sys/failLog.vue')
        }
      },
      {
        path:'/main/warnLog',
        component: function() {
          return import('../views/children/log/sys/warnLog.vue')
        }
      },
      {
        path:'/main/errorLog',
        component: function() {
          return import('../views/children/log/sys/errorLog.vue')
        }
      },
      {
        path:'/main/personal',
        component: function(){
          return import('../views/children/personal/personal.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
