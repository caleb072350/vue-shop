// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, { MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import {Message} from 'element-ui'


axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/' //配置请求的根路径
axios.interceptors.request.use(config=>{
    //console.log(config);
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config;
})

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http = axios
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
