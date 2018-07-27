export default {
  postMessage: (message) => {
    const obj = {message: `${message}`}
    const method = 'POST'
    const body = JSON.stringify(obj)
    const headers = {
      'Accept': 'application/json',
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
