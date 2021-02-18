<template>
  <div class="nav">
    <div class="container d-flex">
      <div>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <!-- <router-link :to="{ name: 'Product' }">Product</router-link> -->
      </div>
      <MiniCart />
    </div>
  </div>
</template>

<script>
import Home from '../views/Home'
import Product from '../views/Product'
import MiniCart from './MiniCart'
export default {
  components: { Home, Product, MiniCart },
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  height: 6vh;
  background: #f3e2c8;
  padding: 8px 0;
}
.logo {
  font-size: 30px;
  font-weight: bold;
  color: #f05627;
}
.nav a {
  font-weight: bold;
  color: #7e92a7;
  text-decoration: none;
  padding: 8px;
  border-radius: 10px;
}

.nav a.router-link-exact-active {
  background: #f05627;
  color: #fff;
}
</style>
