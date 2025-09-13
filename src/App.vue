<script setup>
import { ref, computed } from 'vue'

const estudios = ref('universitarios')
const opcionesEstudios = [
  { label: 'Primarios', value: 'primarios' },
  { label: 'Secundarios', value: 'secundarios' },
  { label: 'Universitarios', value: 'universitarios' },
  { label: 'Posgrado', value: 'posgrado' },
]

const dia = ref('')
const dias = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
]

const estudiosLabel = computed(() => {
  const found = opcionesEstudios.find(o => o.value === estudios.value)
  return found ? found.label : ''
})
</script>

<template>
  <main class="wrap">
    <h1 class="title">CONTROLES EN VUE</h1>

    <section class="block">
      <h2 class="block-title">Estudios</h2>
      <div class="radio-list">
        <label v-for="opt in opcionesEstudios" :key="opt.value" class="radio-item">
          <input type="radio" name="estudios" :value="opt.value" v-model="estudios" />
          <span>{{ opt.label }}</span>
        </label>
      </div>
      <p class="note">Seleccionado: <strong>{{ estudiosLabel }}</strong></p>
    </section>

    <section class="block">
      <h2 class="block-title">Día de la semana</h2>
      <select v-model="dia" class="select">
        <option disabled value="">Selecciona un día</option>
        <option v-for="d in dias" :key="d" :value="d">{{ d }}</option>
      </select>
      <p class="note" v-if="dia">Día seleccionado: <strong>{{ dia }}</strong></p>
    </section>
  </main>
</template>

<style scoped>
.wrap { max-width: 720px; margin: 32px auto; padding: 0 16px; }
.title { margin: 0 0 16px; font-size: 24px; color: #2a2e34; }

/* .block { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 16px; } */
.block-title { margin: 0 0 10px; font-size: 16px; color: #374151; }

.radio-list { 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; 
}
.radio-item { 
  display: flex; 
  align-items: center; 
  gap: 8px; 
  padding: 8px 10px; 
  border: 1px solid #e5e7eb; 
  border-radius: 8px; 
  background: #f9fafb; }
.radio-item input { 
  accent-color: #2563eb; }
.radio-item:hover { 
  border-color: #93c5fd; 
  background: #f1f5f9; }
.select { 
  width: 100%; 
  padding: 8px 10px; 
  background: #f9fafb; 
  border: 1px solid #e5e7eb; 
  color: #111827; 
  border-radius: 8px;   
}
.select:hover { 
  background: #f1f5f9; 
  border-color: #93c5fd; 
}
.select:focus { 
  outline: none; 
  border-color: #93c5fd; 
}                   
.section.block {
  margin-bottom: 16px;
  &:hover {
    background-color: #f3f4f6;
    transition: background-color 0.1s;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
}
.note { margin-top: 8px; color: #4b5563; }
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
