import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Register from '@/components/Register.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } // Esta ruta necesita autenticación
  },
  {
    path: '/',
    redirect: '/login' // Al entrar a "/" redirige a login
  },
  {
    path: '/register',  // ← Nueva ruta
    component: Register
  },
  {
    path: '/:pathMatch(.*)*', // Cualquier ruta no definida
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard para proteger rutas
import { auth } from '@/services/firebase'

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requiresAuth = to.meta.requiresAuth

  if (requiresAuth && !currentUser) {
    // Quiere ir a ruta protegida pero NO está autenticado
    next('/login')
  } else if (to.path === '/login' && currentUser) {
    // Ya está autenticado e intenta ir a login
    next('/home')
  } else {
    // Todo OK, permitir navegación
    next()
  }
})

export default router
