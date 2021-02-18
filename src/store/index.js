import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    peoduct: null,
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products
    },
    GET_PRODUCT(state, product) {
      state.product = product
    },
  },
  actions: {
    async getProducts({ commit }) {
      const res = await fetch('http://localhost:3000/products')
      commit('GET_PRODUCTS', await res.json())
    },
    async getProduct({ commit }, productId) {
      const res = await fetch(`http://localhost:3000/products/${productId}`)
      commit('GET_PRODUCT', await res.json())
    },
  },
  modules: {},
})
