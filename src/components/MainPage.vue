<template>
    <v-app light>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title">titleo</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <section>
          <v-parallax :src="require('../assets/coaching.jpg')" height="1200">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <img src="../assets/logo.png" alt="Vuetify.js" height="200">
              <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
              <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/chat"
              >
                Get Started
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">The best way to start developing</h2>
                <span class="subheading">
                  Cras facilisis mi vitae nunc
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Material Design</div>
                      </v-card-title>
                      <v-card-text>
                        test
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Fast development</div>
                      </v-card-title>
                      <v-card-text>
                      transparent
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Completely Open Sourced</div>
                      </v-card-title>
                      <v-card-text>
                        test
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Made with
                <v-icon class="red--text">favorite</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Your Logo'
    }
  },
  props: {
    source: String
  }
}
</script>

<style>
</style>
