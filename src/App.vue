<template>
  <div id="app">
    <!-- <h1>CoachBot Test</h1>
    <img class="item-img" src="./assets/coaching.jpg"> -->
    <router-view/>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item-img {
  /* width: 150px;
  height: auto; */
  width: 50%;
  height: auto;
}
</style>
