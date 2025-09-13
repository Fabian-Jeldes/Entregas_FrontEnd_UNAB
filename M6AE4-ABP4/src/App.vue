<script setup>
import { computed, reactive, ref, onMounted } from 'vue'
import data from './data/pokemones.json'

const state = reactive({
  termino: '',
  tocado: false,
})

const lista = ref([])

onMounted(() => {
  try {
    // La data viene con estructura [{ pokemones: [...] }]
    lista.value = Array.isArray(data) && data[0]?.pokemones ? data[0].pokemones : []
  } catch (e) {
    lista.value = []
  }
})

const resultados = computed(() => {
  if (!state.termino) return lista.value
  const t = state.termino.trim().toLowerCase()
  return lista.value.filter(p => p.nombre.toLowerCase().includes(t))
})

function onSubmit(e) {
  e.preventDefault()
  state.tocado = true
}

const esValido = computed(() => state.termino.trim().length > 0)
</script>

<template>
  <main class="container py-5">
    <section class="row justify-content-center mb-4">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h1 class="h4 mb-3 text-center">Lista de Pokemones</h1>
            <form @submit="onSubmit" novalidate>
              <div class="input-group">
                <input
                  v-model.trim="state.termino"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': state.tocado && !esValido }"
                  placeholder="Buscar por nombre (ej: pikachu)"
                  aria-label="Buscar pokemon"
                  required
                />
                <button class="btn btn-primary" type="submit">Buscar</button>
              </div>
              <div class="invalid-feedback d-block" v-if="state.tocado && !esValido">
                Por favor ingresa un nombre para buscar.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <ul class="list-group shadow-sm" v-if="resultados.length">
          <li class="list-group-item d-flex justify-content-between align-items-center" v-for="p in resultados" :key="p.id">
            <span class="text-capitalize">{{ p.nombre }}</span>
            <span class="badge text-bg-secondary">#{{ p.id }}</span>
          </li>
        </ul>
        <div v-else class="alert alert-warning" role="alert">
          El pokemon que desea buscar no existe
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main { min-height: 100vh; }
</style>
