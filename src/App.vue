<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const user = computed(() => store.getters.currentUser)

function logout() {
  store.dispatch('logout')
  router.push('/login')
}
</script>

<template>
  <div class="container py-4">
    <header class="app-header d-flex justify-content-between align-items-center mb-4">
      <h1 class="h3">TecnoChile - Gestión de Productos</h1>
      <nav class="nav">
        <router-link class="btn btn-sm btn-outline-primary me-2" to="/">Inicio</router-link>
        <router-link class="btn btn-sm btn-outline-primary me-2" to="/products">Productos</router-link>
        <router-link v-if="!user" class="btn btn-sm btn-outline-success" to="/login">Login</router-link>
        <div v-else style="display:inline-flex;align-items:center;gap:.5rem">
          <span class="text-muted">Hola, {{ user?.name || user?.email }}</span>
          <button class="btn btn-sm btn-outline-danger" @click="logout">Cerrar</button>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
/* minimal global styles kept in src/style.css */
</style>
