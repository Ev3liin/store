<template>
  <div class="dropdown">
    <button @click.self="handleDropdown" class="dropbtn">Cart</button>
    <div v-if="isDropdown">
      <div class="dropdown-content">
        <h4>Title</h4>
        <button class="btn removebtn">remove</button>
        <div class="totalarea">
          <span class="totalProce">Total price: $23</span>
          <button class="btn clearbtn">Clear Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdown: false,
    }
  },
  methods: {
    handleDropdown() {
      this.isDropdown = !this.isDropdown
    },
  },
}
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropbtn {
  background-color: #f05627;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.dropdown-content {
  display: block;
  position: absolute;
  right: 0;
  left: auto;
  top: 6vh;
  background-color: #f7f3f3;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 15px 10px 0px 10px;
  border-radius: 10px;
}
.removebtn {
  background: #ccc9c9;
}
.btn {
  padding: 7px;
  border-radius: 5px;
  border: none;
  transition-duration: 0.3s;
}
.btn:hover {
  opacity: 0.7;
}
.totalarea {
  margin-top: 15px;
  border-top: 1px solid #f05627;
  padding: 10px 5px;
}
.totalProce {
  font-size: 18px;
  color: #000;
}
.clearbtn {
  margin-top: 10px;
  width: 100%;
  background: #f05627;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
}
</style>
