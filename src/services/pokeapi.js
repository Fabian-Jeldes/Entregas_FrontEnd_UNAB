import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/${name.toLowerCase()}`)
    return response.data
  } catch (error) {
    throw new Error('Pokémon no encontrado')
  }
}

