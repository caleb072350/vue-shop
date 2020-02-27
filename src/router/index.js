import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/Home.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home}
  ]
})
router.beforeEach((to,from,next)=>{
      //to 将要访问的路径
      //from 代表从哪个路径来
      if(to.path==='/login') return next();
      const tokenStr=window.sessionStorage.getItem('token')
      if(!tokenStr) return next('/login');
      next();
})
export default router
