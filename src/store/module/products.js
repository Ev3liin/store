export default {
  namespaced: true,
  state: {
    products: [],
    peoduct: null,
    cart: [],
  },
  getters: {
    cartItemCount(state) {
      return state.cart.length
    },
    cartTotalPrice(state) {
      let total = 0
      state.cart.forEach(item => {
        total += item.product.price * item.quantity
      })
      return total
    },
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products
    },
    GET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_TO_CART(state, { product, quantity }) {
      let productInCart = state.cart.find(item => {
        return item.product.id === product.id
      })
      if (productInCart) {
        productInCart.quantity += quantity
        return
      }
      state.cart.push({ product, quantity })
    },
    REMOVE_PRODUCT_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => {
        return item.product.id !== product.id
      })
    },
    CLEAR_CART(state) {
      state.cart = []
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
    addProductToCart({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity })
    },
    removeProductFromCart({ commit }, product) {
      commit('REMOVE_PRODUCT_FROM_CART', product)
    },
    clearCartItems({ commit }) {
      commit('CLEAR_CART')
    },
  },
}
