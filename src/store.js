import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const NMODE = 1
const RMODE = 2
const store = new Vuex.Store({
  state: {
    count: 12,
    chatMode: NMODE
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeModeToR (state) {
      state.chatMode = RMODE
    },
    changeModeToN (state) {
      state.chatMode = NMODE
    }
  }
})

export default store
