<template>
  <!-- <div id="app">
    <h1>CoachBot Test</h1>
    <img class="item-img" src="./assets/coaching.jpg">
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
    <v-container fluid grid-list-sm fill-heigh>
      <v-content>
        <!-- <v-container fluid fill-height>
        </v-container> -->
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md4>
            <v-layout row wrap>
              <v-flex d-flex sm12>
                <v-card color="indigo" dark>
                  <v-card-text>Character</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex sm12>
                <v-card color="indigo" dark>
                  <v-card-text>Mode</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex sm12>
                <v-card color="white">
                  <v-card-text></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm6 md8>
            <v-card color="blue-grey lighten-3" dark>
              <v-card-title primary class="title">Chat</v-card-title>
                <v-card-text>
                  <v-layout
                  justify-center
                  column
                  align-center
                  >
                <!-- <img class="item-img" src="./assets/coaching.jpg"> -->
                  <router-view/>
                  </v-layout>
                </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-content>
    </v-container>
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
