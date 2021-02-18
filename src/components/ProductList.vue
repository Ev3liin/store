<template>
  <div class="container d-flex">
    <div v-for="product in products" :key="product.id">
      <SingleProduct :product="product" />
    </div>
  </div>
</template>

<script>
import SingleProduct from './SingleProduct'
export default {
  components: { SingleProduct },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    this.$store.dispatch('getProducts')
  },
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
