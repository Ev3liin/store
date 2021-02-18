<template>
  <div class="container detailscard">
    <div class="img-holder">
      <img :src="product.image" :alt="product.name" class="img" />
    </div>
    <div>
      <h1>{{ product.title }}</h1>
      <p>price: {{ product.price }}</p>
      <input type="number" v-model="quantity" class="quantity " />
      <button class="btn addcard">Add to cart</button>
      <p>{{ product.description }}</p>
      <button class="btn" @click="back">Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    product() {
      return this.$store.state.product
    },
  },
  mounted() {
    this.$store.dispatch('getProduct', this.id)
  },
  methods: {
    back() {
      return this.$router.go(-1)
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
