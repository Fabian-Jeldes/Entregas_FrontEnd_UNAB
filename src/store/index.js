import { createStore } from 'vuex'

const initialProducts = [
  { codigo: '0001', nombre: 'Audifonos', stock: 100, precio: 30000, color: 'blue', destacado: true },
  { codigo: '0002', nombre: 'Televisor', stock: 500, precio: 10000, color: 'red', destacado: false },
  { codigo: '0003', nombre: 'Telefono', stock: 200, precio: 20000, color: 'red', destacado: false },
  { codigo: '0004', nombre: 'Reloj', stock: 300, precio: 40000, color: 'red', destacado: true }
]

export default createStore({
  state: {
    products: initialProducts
    , user: null
  },
  getters: {
    allProducts: (state) => state.products,
    totalProductsCount: (state) => state.products.length,
    totalStock: (state) => state.products.reduce((s, p) => s + Number(p.stock || 0), 0)
    , currentUser: (state) => state.user
  },
  mutations: {
    addProduct(state, product) {
      state.products.unshift(product)
    },
    updateProduct(state, updated) {
      const idx = state.products.findIndex(p => p.codigo === updated.codigo)
      if (idx !== -1) state.products.splice(idx, 1, updated)
    },
    deleteProduct(state, codigo) {
      state.products = state.products.filter(p => p.codigo !== codigo)
    }
    , setUser(state, user) { state.user = user }
    , clearUser(state) { state.user = null }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product)
    },
    updateProduct({ commit }, product) {
      commit('updateProduct', product)
    },
    deleteProduct({ commit }, codigo) {
      commit('deleteProduct', codigo)
    }
    , login({ commit }, user) {
      // simple fake login (no backend)
      commit('setUser', user)
    }
    , logout({ commit }) {
      commit('clearUser')
    }
  }
})
