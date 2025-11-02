<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

function submit(e) {
  e.preventDefault()
  if (!email.value.trim()) { error.value = 'Email requerido'; return }
  // fake validation
  store.dispatch('login', { email: email.value.trim(), name: email.value.split('@')[0] })
  router.push('/products')
}
</script>

<template>
  <div class="d-flex" style="min-height:70vh;align-items:center;justify-content:center">
    <div class="login-card card" style="width:420px;max-width:90%">
      <div style="text-align:center;margin-bottom:1.5rem">
        <div style="width:64px;height:64px;margin:0 auto 1rem;background:linear-gradient(135deg,var(--primary),var(--primary-dark));border-radius:1rem;display:flex;align-items:center;justify-content:center">
          <i class="bi bi-box-seam" style="font-size:2rem;color:white"></i>
        </div>
        <h3 style="margin-bottom:0.5rem">Iniciar sesión</h3>
        <p class="text-muted" style="margin:0;font-size:0.875rem">Accede a TecnoChile para gestionar productos</p>
      </div>
      <form @submit="submit">
        <div class="mb-3">
          <label class="form-label"><i class="bi bi-envelope me-1"></i>Email</label>
          <input v-model="email" class="form-control" type="email" placeholder="tucorreo@ejemplo.com" required />
        </div>
        <div class="mb-3">
          <label class="form-label"><i class="bi bi-lock me-1"></i>Contraseña</label>
          <input v-model="password" class="form-control" type="password" placeholder="••••••••" />
        </div>
        <div v-if="error" class="alert alert-danger" style="padding:0.75rem;border-radius:0.5rem;font-size:0.875rem">
          <i class="bi bi-exclamation-triangle me-1"></i>{{ error }}
        </div>
        <button class="btn btn-primary w-100 mb-3" type="submit" style="padding:0.75rem">
          <i class="bi bi-box-arrow-in-right me-1"></i>
          Iniciar sesión
        </button>
        <div style="text-align:center">
          <a class="text-muted" href="#" style="font-size:0.875rem;text-decoration:none">
            <i class="bi bi-question-circle me-1"></i>¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}
.form-control {
  padding: 0.75rem 1rem;
}
</style>
