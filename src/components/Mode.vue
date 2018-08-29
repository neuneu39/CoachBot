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
        <v-btn
                large
                color="primary"
                @click="countup"
        >
        Countup {{ $store.state.count }}
        </v-btn>
    </v-layout>
</template>
<script>
import store from '@/store.js'
console.log(store.state.count + 'good one')

const NMODE = 1
// const RMODE = 2
export default {
  name: 'Mode',
  // props: [],
  data () {
    return {
      chatMode: NMODE
    }
  },
  methods: {
    // setMode: function (mode) {
    //   this.chatMode = mode
    //   console.log(mode)
    // },
    // setNMode: function () {
    //   this.setMode(NMODE)
    // },
    // setRMode: function () {
    //   this.setMode(RMODE)
    // },
    setNMode: function () {
      store.commit('changeModeToN')
      console.log('setMMode')
    },
    setRMode: function () {
      store.commit('changeModeToR')
      console.log('setRMode')
    },
    countup () {
      store.commit('increment')
      return store.state.count
    }
    // setMode: function (mode) {
    //   store.commit('chageMode')
    //   this.chatMode = mode
    //   console.log(mode)
    // },
  },
  computed: {
    countup2: function () {
      store.commit('increment')
      return store.state.count
    }
    // countup: function () {
    //   store.commit('increment')
    //   return store.state.count
    // }
  }
}
</script>
<style>

</style>
