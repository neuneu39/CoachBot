<template>
<div class="message">
  <div class="input-message">
    <h2>input message</h2>
    <div class="buttons-container">
      <button
       class="N-mode"
       v-on:click="setMode(1)"
      >
      N-mode
      </button>
      <button
       class="R-mode"
       v-on:click="setMode(2)"
      >
      R-Mode
      </button>
    </div>
    <!-- submitイベントによるページのリロード防止 -->
    <form v-on:submit.prevent="sendMessage" method="post">
      <textarea v-model="messageText" placeholder="write text" />
      <button type="submit">OK</button>
    </form>
  </div>
  <h2>output message</h2>
  <div v-for="text of answerText" v-bind:key="text.id" class="output-message">
    <div v-if=text.botFlag class="bot-message">
      <div class="faceicon">
        <img src="../assets/logo.png">
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
  <div v-if=errorMessage>
    <p>{{ errorMessage }}</p>
  </div>
  <p>Back to the <router-link to="/">Home</router-link></p>
</div>
</template>

<script>
import apiService from '../api-service'
const normalMessage = 'なにか入力してください！'
export default {
  name: 'Chat',
  data () {
    return {
      messageText: '',
      answerText: [],
      ids: 0,
      errorMessage: '',
      chatMode: 1
    }
  },
  methods: {
    sendMessage: function () {
      this.resetErrorMessage()
      if (this.messageText !== '') {
        this.answerText.push(this.setMessage(this.ids++, this.messageText, false))
        apiService.postMessage(this.messageText, this.chatMode)
          .then(json => {
            this.answerText.push(this.setMessage(this.ids++, json.message))
          })
          .catch(e => {
            console.log('error response from apiService e = ', e)
            const eMessage = 'サーバーに問題が発生しました'
            this.setErrorMessage(eMessage)
          })
      } else {
        this.answerText.push(this.setMessage(this.ids++, normalMessage))
      }
    },
    setMessage: function (idNum, text, Flag = true) {
      return {
        id: idNum,
        message: text,
        botFlag: Flag,
        mode: this.chatMode
      }
    },
    setErrorMessage: function (eMessage) {
      this.errorMessage = eMessage
    },
    resetErrorMessage: function () {
      this.errorMessage = ''
    },
    setMode: function (mode) {
      this.chatMode = mode
    }
  }
}
</script>
<style>
.message {
  width: 100%;
  padding: 15px;
}
.input-message, {
  width: 46%;
  border: 1px solid #ddd;
  padding: 10px;
  margin: auto;
}
.output-message {
  padding: 1px 10px;
  max-width: 450px;
  margin: auto;
  text-align: right;
  font-size: 14px;
  background: #7da4cd;
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
  background: #edf1ee;
}
.says::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 3px;
  left: -19px;
  border: 8px solid transparent;
  border-right: 18px solid #edf1ee;
  -ms-transform: rotate(35deg);
  -webkit-transform: rotate(35deg);
  transform: rotate(35deg);
}
.says p {
  margin: 0;
  padding: 0;
}
/*以下、③右側の緑コメント*/
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
button.N-mode {
  background-color: rgb(77, 236, 56);
}
button.R-mode {
  background-color: red;
}
.counters-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
</style>
