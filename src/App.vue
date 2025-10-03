<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import PersonajeCard from './components/PersonajeCard.vue';
import PersonajeList from './components/PersonajeList.vue';


const personajes = ref([
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Planta/Veneno',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    descripcion: 'Bulbasaur es un Pokémon de tipo Planta y Veneno. Es conocido por la semilla en su espalda que crece con el tiempo.'
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'Planta/Veneno',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    descripcion: 'Ivysaur es un Pokémon de tipo Planta y Veneno. Es la forma evolucionada de Bulbasaur y tiene una planta en su espalda que está a punto de florecer.'
  },
  {
    id: 3,
    name: 'Venusaur',
    type: 'Planta/Veneno',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    descripcion: 'Venusaur es un Pokémon de tipo Planta y Veneno. Es la forma evolucionada de Ivysaur y tiene una gran flor en su espalda.'
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fuego',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    descripcion: 'Charmander es un Pokémon de tipo Fuego. Es conocido por su cola llameante y su naturaleza enérgica.'
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: 'Fuego',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    descripcion: 'Charmeleon es un Pokémon de tipo Fuego. Es la forma evolucionada de Charmander y es conocido por su temperamento ardiente.'
  },
  {
    id: 6,
    name: 'Charizard',
    type: 'Fuego/Volador',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    descripcion: 'Charizard es un Pokémon de tipo Fuego y Volador. Es la forma evolucionada de Charmeleon y es conocido por su capacidad para volar y lanzar poderosas llamas.'
  }
])
const seleccionado = ref(null);
onMounted(() => {
  console.log('Componente montado', seleccionado.value); 
})
function handleSeleccion(personaje) {
  seleccionado.value = personaje;
  console.log('Personaje seleccionado:', personaje);
}
 
const created = () => {
  console.log('Componente creado'); 
}
onMounted(created);

</script>

<template>
<main>  
  <h1>Listado de Pokemons</h1>
  <PersonajeList :personajes="personajes" @ver-detalle="handleSeleccion" />

</main>
</template>

<style>

</style>
|