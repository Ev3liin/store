<template>
  <div class="container detailscard" v-if="product">
    <div class="img-holder">
      <img :src="product.image" :alt="product.name" class="img" />
    </div>
    <div>
      <h1>{{ product.title }}</h1>
      <p>price: ${{ product.price }}</p>
      <input type="number" v-model.number="quantity" class="quantity " />
      <button @click="addToCart" class="btn addcard">Add to cart</button>
      <p>{{ product.description }}</p>
      <button class="btn" @click="back">Go Back</button>
    </div>
  </div>
  <div v-else>Loading...</div>
  <p>{{ id }}</p>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    ...mapState('products', ['product']),
    // product(){
    //   return this.$store.state.product
    // }
  },
  mounted() {
    // this.$store.dispatch('getProduct', this.id)
    this.getProduct(this.id)
  },
  methods: {
    back() {
      return this.$router.go(-1)
    },
    // addToCart() {
    //   this.$store.dispatch('addProductToCart', {
    //     product: this.product,
    //     quantity: 1,
    //   })
    // },
    ...mapActions('products', ['getProduct', 'addProductToCart']),
    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: this.quantity,
      })
    },
  },
}
</script>

<style>
.detailscard {
  margin-top: 30px;
  display: flex;
}
.detailscard .img-holder {
  height: 30vh;
  width: 30vh;
  margin-right: 50px;
}
.quantity {
  margin-right: 15px;
}
.img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
