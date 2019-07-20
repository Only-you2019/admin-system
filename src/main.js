import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
//引入jquery
import $ from 'jquery'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入echarts
import echarts from 'echarts'
// 引入axios，并加到原型链中
import axios from 'axios';
// 允许携带cookie
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios;
//axios的依赖
import QS from 'qs'
Vue.prototype.qs = QS;

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
