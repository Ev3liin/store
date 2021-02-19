<template>
  <div class="cart">
    <router-link
      class="link"
      :to="{ name: 'Product', params: { id: product.id } }"
    >
      <img class="img" :src="product.image" :alt="product.name" />
      <h1 class="title">{{ product.title }}</h1>
    </router-link>
    <p class="description">{{ snippet }}</p>
    <p class="price">Price: ${{ product.price }}</p>
    <button @click="addToCart" class="btn addcard">Add To Cart</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['product'],
  computed: {
    snippet() {
      return this.product.description.substring(0, 100) + '...'
    },
  },
  methods: {
    ...mapActions('products', ['addProductToCart']),
    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: 1,
      })
    },
    // addToCart() {
    //   this.$store.dispatch('addProductToCart', {
    //     product: this.product,
    //     quantity: 1,
    //   })
    // },
  },
}
</script>

<style>
.cart {
  width: 300px;
  background: #fff4f4;
  height: auto;
  padding: 15px;
  border-radius: 20px;
  margin: 30px 10px 0px 10px;
}
.cart .img {
  width: 270px;
  border-radius: 5px;
}
.cart .description {
  margin: 10px 0;
}
.title {
  text-decoration: none;
  color: #f05627;
  cursor: pointer;
  font-size: 25px;
  transition-duration: 0.3s;
}
.link {
  text-decoration: none;
}
.title:hover {
  color: crimson;
}
.addcard {
  margin: 5px 0;
  background: #f05627;
  color: #fff;
}
</style>
