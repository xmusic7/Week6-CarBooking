  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import AppHome from '../components/AppHome.vue'
  import AppLogin from '../components/AppLogin.vue'
  import AppBooking from '../components/AppBooking.vue'

  Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component:AppLogin
    }
    {
      path:'/booking',
      name:'AppBooking',
      component:AppBooking
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router
