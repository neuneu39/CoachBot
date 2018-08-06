<template>
  <!-- <div id="app">
    <h1>CoachBot Test</h1>
    <img class="item-img" src="./assets/coaching.jpg">
    <router-view/>
  </div> -->

<div id="app">
  <v-app id="inspire">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
     <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <ToolBar/>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CoachBot</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          column
          align-center
        >
        <!-- <img class="item-img" src="./assets/coaching.jpg"> -->
        <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <v-layout align-center justify-center column fill-height>
      <span class="white--text">&copy; 2018</span>
      </v-layout>
    </v-footer>
  </v-app>
</div>
</template>

<script>
import ToolBar from './components/ToolBar'
export default {
  name: 'App',
  components: {
    ToolBar: ToolBar
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.item-img {
  /* width: 150px;
  height: auto; */
  width: 50%;
  height: auto;
}
</style>
