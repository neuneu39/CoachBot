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
      .then((res) => res.json())
      // .catch(err => {
      //   console.log('エラー', err.name)
      // })
      // if (!res.ok) {
      //   throw new Error('Error in Post /api/answer')
      // } else {
      // res.json()
      // }
  }
}
