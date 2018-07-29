export default {
  postMessage: (message, chatMode) => {
    const obj = {
      message: message,
      mode: chatMode
    }
    const method = 'POST'
    const body = JSON.stringify(obj)
    const headers = {
      'Content-Type': 'application/json'
    }
    return fetch('./api/answer', {method, headers, body})
      .then(data => data.json())
      .then(json => {
        return {
          message: json
        }
      })
  }
}
