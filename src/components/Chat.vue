<template>
<div class="message">
    <div v-if=errorMessage>
      <p>{{ errorMessage }}</p>
    </div>
  <!-- <v-layout justify-space-around column fill-height> -->
  <v-layout align-space-around column >
    <!-- <v-layout justify-center row fill-height>
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
    </v-layout> -->
    <Mode/>
    <v-parallax
                height="350"
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <div class="chatroom" v-chat-scroll>
        <div v-for="text of answerText" v-bind:key="text.id" class="output-message" v-chat-scroll>
          <div v-if=text.botFlag class="bot-message">
            <div class="faceicon">
              <img src="../assets/FaceFree.png">
            </div>
            <div class="chatting">
              <div class="says">
                <p>{{ text.message }}</p>
              </div>
            </div>
          </div>
          <div v-if=!text.botFlag class="user-message">
            <p>{{ text.message }}</p>
          </div>
        </div>
      </div>
    </v-parallax>
    <div class="input-message">
      <!-- submitイベントによるページのリロード防止 -->
      <form v-on:submit.prevent="sendMessage" method="post">
        <v-textarea
                      v-model="messageText"
                      solo
                      name="input-7-4"
                      placeholder="write text"
        ></v-textarea>
        <button type="submit">OK</button>
      </form>
    </div>
  </v-layout>
</div>
</template>
<script>
import apiService from '../api-service'
import Mode from './Mode'
import store from '@/store.js'
const normalMessage = 'なにか入力してください！'
const firstMessage = '今日はどんなことがありました？'
const NMODE = 1
// const RMODE = 2
export default {
  name: 'Chat',
  components: {
    Mode
  },
  data () {
    return {
      messageText: '',
      answerText: [],
      ids: 0,
      errorMessage: '',
      chatMode: NMODE
    }
  },
  methods: {
    sendMessage: function () {
      console.log('chatmode=', this.chatMode, store.state.chatMode)
      this.resetErrorMessage()
      if (this.messageText !== '') {
        this.answerText.push(this.setMessage(this.ids++, this.messageText, false))
        apiService.postMessage(this.messageText, store.state.chatMode)
        // apiService.postMessage(this.messageText, this.chatMode)
          .then(json => {
            this.answerText.push(this.setMessage(this.ids++, json.message))
          })
          .catch(e => {
            console.log('error response from apiService e = ', e)
            const eMessage = 'サーバーに問題が発生しました'
            this.setErrorMessage(eMessage)
          })
      } else {
        if (this.ids === 0) {
          this.answerText.push(this.setMessage(this.ids++, firstMessage))
        } else {
          console.log('answerText=', this.answerText)
          this.answerText.push(this.setMessage(this.ids++, normalMessage))
        }
      }
    },
    setMessage: function (idNum, text, flag = true) {
      if (flag) {
        this.resetTextAreaMessage()
      }
      return {
        id: idNum,
        message: text,
        botFlag: flag,
        // mode: this.chatMode
        mode: store.state.chatMode
      }
    },
    setErrorMessage: function (eMessage) {
      this.errorMessage = eMessage
    },
    resetErrorMessage: function () {
      this.errorMessage = ''
    },
    resetTextAreaMessage: function () {
      this.messageText = ''
    }
    // ,
    // setMode: function (mode) {
    //   this.chatMode = mode
    //   console.log(mode)
    // },
    // setNMode: function () {
    //   this.setMode(NMODE)
    // },
    // setRMode: function () {
    //   this.setMode(RMODE)
    // }
  },
  mounted: function () {
    // 初期のメッセージ
    this.sendMessage()
  }
}
</script>
<style>
.message {
  width: 100%;
  /* padding: 15px; */
}
.chatroom {
  overflow-y: auto;
}
.input-message, {
  /* width: 46%; */
  border: 1px solid rgb(29, 11, 11);
  /* max-width: 450px; */
  /* padding: 10px; */
  margin: auto;
}
.output-message {
  padding: 1px 10px;
  /* max-width: 450px; */
  /* width: 100%; */
  margin: auto;
  text-align: right;
  font-size: 14px;
  /* background: #7da4cd; */
}
.bot-message {
  width: 100%;
  margin: 10px 0;
  overflow: hidden;
}
.bot-message .faceicon {
  float: left;
  margin-right: -50px;
  width: 40px;
}
.bot-message .faceicon img{
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.bot-message .chatting {
  width: 100%;
  text-align: left;
}
.says {
  display: inline-block;
  position: relative;
  margin: 0 0 0 50px;
  padding: 10px;
  max-width: 250px;
  border-radius: 12px;
  background: hsl(236, 91%, 46%);
}
.says::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 3px;
  left: -19px;
  border: 8px solid transparent;
  border-right: 18px solid hsl(236, 91%, 46%);
  -ms-transform: rotate(35deg);
  -webkit-transform: rotate(35deg);
  transform: rotate(35deg);
}
.says p {
  margin: 0;
  padding: 0;
}
.user-message {
  margin: 10px 0;
}
.user-message p{
  display: inline-block;
  position: relative;
  margin: 0 10px 0 0;
  padding: 8px;
  max-width: 250px;
  border-radius: 12px;
  background: #30e852;
  font-size: 15px;
}
.user-message p::after {
  content: "";
  position: absolute;
  top: 3px;
  right: -19px;
  border: 8px solid transparent;
  border-left: 18px solid #30e852;
  -ms-transform: rotate(-35deg);
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
}
button {
  display: block;
  width: 20%;
  margin: 5px auto;
  padding: 10px;
}
.counters-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
</style>
