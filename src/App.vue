<script setup>
import { reactive } from 'vue'

const state = reactive({
  personajes: [
    { id: 1, nombre: 'Pikachu', descripcion: 'Ratón eléctrico que almacena energía en sus mejillas y la libera en potentes descargas. Ágil y amistoso, corre y salta con facilidad.', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
    { id: 2, nombre: 'Kakuna', descripcion: 'Etapa capullo de Weedle. Permanece casi inmóvil para conservar energía mientras su cuerpo cambia. Endurece su coraza para resistir ataques.',  imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png'  },
    { id: 3, nombre: 'Beedrill', descripcion: 'Avispa territorial con tres aguijones venenosos. Vuela rápido y ataca en grupo cuando percibe intrusos. Sus picaduras son sumamente dolorosas.', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png'  },
    { id: 4, nombre: 'Metapod', descripcion: 'Capullo que ha endurecido al máximo su concha. Apenas se mueve; concentra fuerzas internas para evolucionar. Usa Endurecer para protegerse.', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png' },
    { id: 5, nombre: 'Rattata', descripcion: 'Roedor veloz y muy tenaz. Roe todo para mantener sus incisivos afilados y puede vivir en campos o casas, donde defiende su territorio.', imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png' }
  ]
})
</script>

<template>
  <main class="container">
    <header class="header">
      <div>
        <h1>Pokemons</h1>
        <p class="hint">Pequeña lista de 5 Pokemons. A continuación una breve descripción y una fotito:</p>
      </div>
    </header>

    <section v-if="state.personajes.length" class="list-wrap">
      <ul class="card-list">
        <li v-for="p in state.personajes" :key="p.id" class="card">
          <div class="card-head">
            <span class="chip">#{{ p.id }}</span>
            <div><img :src="p.imagen" :alt="p.nombre" /></div>
            <h2>{{ p.nombre }}</h2>
          </div>
          <p>{{ p.descripcion }}</p>
        </li>
      </ul>
    </section>
    <p v-else class="empty">No hay Pokemons para mostrar.</p>
  </main>
  
</template>

<style scoped>
</style>
