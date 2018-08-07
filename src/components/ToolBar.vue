<template>
<div>
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
</div>
</template>
<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' }
      ],
      //  right: null,
      drawer: null
    }
  }
}
</script>
<style>
</style>
