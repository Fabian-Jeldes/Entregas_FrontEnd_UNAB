<script setup>
const props = defineProps({
    personaje: {
        type: Object,
        required: true
    }
})

const emit = defineEmits({
    'ver-detalle': (payload) => {
        const ok = typeof payload.id === 'number' && typeof payload.name === 'string';
        if (!ok) {
            console.warn('Payload inválido para el evento "ver-detalle":', payload);
        }
        return ok;
    }
});

function emitirEvento() {
    emit('ver-detalle', { id: props.personaje.id, name: props.personaje.name });
}
</script>

<template>
<div class="personaje-card">
    <h2>{{ personaje.name }}</h2>
    <img :src="personaje.image" :alt="personaje.name" />
    <p><strong>Tipo:</strong> {{ personaje.type }}</p>
    <p>{{ personaje.descripcion }}</p>
    <slot name= "tipo">
        <p>{{ personaje.type }}</p>
    </slot>
    <div>
        <button @click="emitirEvento">Click me!</button>
    </div>
</div>
</template>

<style scoped>
.personaje-card {
    display:flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    max-width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px; 
}
.personaje-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
}
.personaje-card img {
  max-width: 100%;
  border-radius: 8px;
}
</style>