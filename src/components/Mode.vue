<template>
    <v-layout justify-center row fill-height>
        <v-btn
                large
                @click="setNMode()"
        >
        N-mode
        </v-btn>
        <v-btn
                large
                color="primary"
                @click="setRMode()"
        >
        R-Mode
        </v-btn>
    </v-layout>
</template>
<script>
const NMODE = 1
const RMODE = 2
export default {
  name: 'Mode',
  // props: [],
  data () {
    return {
      chatMode: NMODE
    }
  },
  methods: {
    setMode: function (mode) {
      this.chatMode = mode
      console.log(mode)
    },
    setNMode: function () {
      this.setMode(NMODE)
    },
    setRMode: function () {
      this.setMode(RMODE)
    }
  }
}
</script>
<style>

</style>
