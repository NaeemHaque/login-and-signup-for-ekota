import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import SignupForAthlate from '../views/signup/signupForAthlateOrParent'
import SignupForCoach from '../views/signup/signupForCoach'
import SignupFormanager from '../views/signup/signupFormanager'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup-for-athlate-or-parent',
    name: 'SignupForAthlate',
    component: SignupForAthlate
  },
  {
    path: '/signup-for-coach',
    name: 'SignupForCoach',
    component: SignupForCoach
  },
  {
    path: '/signup-for-manager',
    name: 'SignupFormanager',
    component: SignupFormanager
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
