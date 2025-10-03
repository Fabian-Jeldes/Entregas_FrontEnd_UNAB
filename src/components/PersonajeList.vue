<script setup>
import { defineProps } from 'vue';
import PersonajeCard from './PersonajeCard.vue';

const props = defineProps({
    personajes: {
        type: Array,
        required: true
    }
})
</script>

<template>
<div class="personaje-list">
  <PersonajeCard
    v-for="personaje in personajes"
    :key="personaje.id"
    :personaje="personaje"
    @ver-detalle="(payload) => $emit('ver-detalle', payload)"
  >
    <template #tipo>
      <p>{{ personaje.type }}</p>
    </template>
  </PersonajeCard>

</div>
</template>

<style scoped>
.personaje-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
