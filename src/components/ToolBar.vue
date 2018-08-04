<template>
<div>
    <!-- <v-app id="inspire">
     <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    > -->
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <router-link to="/">
            <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <!-- <v-list-tile @click="test"> -->
        <v-list-tile>
          <v-list-tile-action>
            <!-- <v-icon>contact_mail</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
        <!-- <v-toolbar flat>
        <v-list>
            <v-list-tile>
            <v-list-tile-title class="title">
                Application
            </v-list-tile-title>
            </v-list-tile>
        </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list dense class="pt-0">
        <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click="test"
        >
            <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </v-list> -->
    <!-- </v-navigation-drawer> -->
    <!-- </v-app> -->
</div>
</template>
<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      //  right: null,
      drawer: null
    }
  }
}
</script>
<style>

</style>
