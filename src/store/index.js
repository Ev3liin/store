import { createStore } from 'vuex'
import productsModule from './module/products'

export default createStore({
  modules: {
    products: productsModule,
  },
})
