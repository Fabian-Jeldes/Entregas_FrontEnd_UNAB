<template>
  <div class="home-container">
    <header>
      <h1>Pokeguía</h1>
      <button @click="handleLogout">Salir</button>
    </header>
    
    <div class="search-section">
      <input 
        v-model="pokemonName" 
        placeholder="Buscar Pokémon..." 
        @keyup.enter="searchPokemon"
      />
      <button @click="searchPokemon">Buscar</button>
    </div>

    <div v-if="pokemon" class="pokemon-info">
      <!-- Imagen del Pokémon -->
      <img :src="pokemonImage" :alt="pokemon.name" class="pokemon-image">
      
      <h2 class="pokemon-name">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}</h2>
      
      <!-- Movimientos -->
      <div class="moves">
        <h3>Movimientos:</h3>
        <ul>
          <li v-for="move in pokemonMoves" :key="move">
            {{ move }}
          </li>
        </ul>
      </div>
      
      <!-- Habilidades -->
      <div class="abilities">
        <h3>Habilidades:</h3>
        <ul>
          <li v-for="ability in pokemonAbilities" :key="ability">
            {{ ability }}
          </li>
        </ul>
      </div>
    </div>
    
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="loading" class="loading">Cargando...</div>
  </div>
</template>

<script>
import { signOut } from 'firebase/auth'
import { auth } from '@/services/firebase'
import { getPokemon } from '@/services/pokeapi'

export default {
  name: 'Home',
  data() {
    return {
      pokemonName: 'pikachu',
      pokemon: null,
      error: null,
      loading: false
    }
  },
  computed: {
    // Computed property para la imagen del Pokémon
    pokemonImage() {
      if (!this.pokemon) return ''
      
      // Intentar obtener la imagen de mejor calidad (official artwork)
      return this.pokemon.sprites?.other?.['official-artwork']?.front_default ||
             this.pokemon.sprites?.front_default ||
             ''
    },
    
    // Computed property para los movimientos (limitamos a 10)
    pokemonMoves() {
      if (!this.pokemon) return []
      
      // La API devuelve MUCHOS movimientos, limitamos a 10
      return this.pokemon.moves
        .slice(0, 10)
        .map(m => m.move.name)
        .map(name => name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '))
    },
    
    // Computed property para las habilidades
    pokemonAbilities() {
      if (!this.pokemon) return []
      
      // Extraer nombres de habilidades
      return this.pokemon.abilities.map(a => a.ability.name)
        .map(name => name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '))
    }
  },
  methods: {
    async searchPokemon() {
      if (!this.pokemonName.trim()) {
        this.error = 'Por favor ingresa un nombre de Pokémon'
        return
      }

      this.error = null
      this.loading = true
      this.pokemon = null
      
      try {
        // Llamar al servicio
        const data = await getPokemon(this.pokemonName.toLowerCase())
        
        // Guardar en estado reactivo
        this.pokemon = data
        
        // Las computed properties se actualizan automáticamente
      } catch (err) {
        this.error = 'Pokémon no encontrado. Intenta con otro nombre.'
        this.pokemon = null
        console.error('Error al buscar Pokémon:', err)
      } finally {
        this.loading = false
      }
    },
    
    async handleLogout() {
      try {
        await signOut(auth)
        this.$router.push('/login')
      } catch (error) {
        console.error('Error al cerrar sesión:', error)
        this.error = 'Error al cerrar sesión'
      }
    }
  },
  // Hook created para cargar Pikachu automáticamente al montar el componente
  created() {
    this.searchPokemon()
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 30px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

header h1 {
  color: #333;
  margin: 0;
  font-size: 2em;
}

header button {
  padding: 10px 20px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s;
}

header button:hover {
  background: #c0392b;
}

.search-section {
  display: flex;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto 30px;
  padding: 0 20px;
}

.search-section input {
  flex: 1;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.search-section input:focus {
  outline: none;
  border-color: #667eea;
}

.search-section button {
  padding: 12px 30px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.search-section button:hover {
  background: #5568d3;
}

.pokemon-info {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-image {
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
}

.pokemon-name {
  font-size: 2.5em;
  color: #333;
  margin: 0 0 30px 0;
  text-transform: capitalize;
}

.moves, .abilities {
  width: 100%;
  margin-bottom: 30px;
}

.moves h3, .abilities h3 {
  color: #667eea;
  font-size: 1.5em;
  margin-bottom: 15px;
  text-align: left;
}

.moves ul, .abilities ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.moves li, .abilities li {
  padding: 10px;
  background: #f8f9fa;
  border-radius: 5px;
  text-transform: capitalize;
  text-align: center;
}

.error {
  color: #e74c3c;
  text-align: center;
  font-size: 18px;
  margin: 20px auto;
  max-width: 1200px;
  padding: 15px;
  background: white;
  border-radius: 5px;
}

.loading {
  text-align: center;
  color: white;
  font-size: 18px;
  margin: 20px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    gap: 15px;
  }

  .search-section {
    flex-direction: column;
  }

  .pokemon-image {
    width: 200px;
    height: 200px;
  }

  .moves ul, .abilities ul {
    grid-template-columns: 1fr;
  }
}
</style>
