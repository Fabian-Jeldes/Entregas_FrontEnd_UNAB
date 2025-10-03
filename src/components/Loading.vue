<script setup>
import { ref, onMounted } from 'vue'
import PersonajeCard from './components/PersonajeCard.vue';
import PersonajeList from './components/PersonajeList.vue';

onMounted(() => {
    setTimeout(() => {
        console.log('Componente montado'); 
    }, 2000);
})
</script> 

<template>
    <div class="loading">
        <p>Cargando...</p>
    </div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>