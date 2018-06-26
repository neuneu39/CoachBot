<template>
<div class="message">
  <div class="input-message">
    <h2>input message</h2>
    <!-- submitイベントによるページのリロード防止 -->
    <form v-on:submit.prevent="sendMessage" method="post">
      <textarea v-model="messageText" placeholder="write text" />
      <button type="submit">OK</button>
    </form>
  </div>
  <div class="output-message">
    <h2>output message</h2>
    {{ answerText }}
  </div>
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
      answerText: ''
    }
  },
  methods: {
    sendMessage: function () {
      if (this.messageText !== '') {
        this.setKeyMessage()
      } else {
        this.answerText = normalMessage
      }
    },
    getItems: function (answer) {
      apiService.getReply()
        .then(message => {
          this.setMessage(message[answer])
          console.log(message)
        })
    },
    setMessage: function (message) {
      this.answerText = message
    },
    setNormalMessage: function (message) {
      this.answerText = `${message}なんですね`
    },
    setKeyMessage: function () {
      if (this.messageText === '天気') { this.getItems('weather') }
      if (this.messageText === 'おみくじ') {
        this.getItems('message')
      } else {
        this.setNormalMessage(this.messageText)
      }
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
.message {
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  display: block;
}
.input-message, .output-message{
  width: 46%;
  border: 1px solid #ddd;
  padding: 10px;
  margin: auto;
}
button {
  display: block;
  width: 20%;
  margin: 5px auto;
  padding: 10px;
}
</style>
