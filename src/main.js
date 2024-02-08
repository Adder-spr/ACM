import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

//全局vue页面使用注册的组件[this.$message({type:'',msg:''})]，js使用需要引入element-ui组件
// Vue.prototype.$message = function (msg, type) {
//   ElementUI.Message({
//     showClose: true,
//     message: msg,
//     type: type
//   })
// };
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
