export default {
  getReply: () => {
    const options = {
      method: 'POST'
    }
    // let num = omikuji()
    // let word = WordMap[num]
    return fetch('/api/answer', options)
      .then(response => response.json())
      .then((json) => {
        return {
          message: json.message
        }
      })
  },
  postMessage: (message) => {
    const obj = {message: `${message}`}
    const method = 'POST'
    const body = JSON.stringify(obj)
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return fetch('./api/answer', {method, headers, body})
      .then((res) => res.json())
      // if (!res.ok) {
      //   throw new Error('Error in Post /api/answer')
      // } else {
      // res.json()
      // }
  }
}
