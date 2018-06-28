const WordMap = ['daikichi', 'cyukichi', 'shokichi']

function omikuji () {
  return Math.floor(Math.random() * 3)
}
export default {
  getReply: () => {
    const options = {
      method: 'POST'
    }
    let num = omikuji()
    let word = WordMap[num]
    return fetch('/api/answer', options)
      .then(response => response.json())
      .then((json) => {
        return {
          message: json[word],
          weather: json.weather
        }
      })
  },
  postMessage: (obj) => {
    // const obj = {hello: 'world'}
    const method = 'POST'
    const body = JSON.stringify(obj)
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return fetch('./api/answer', {method, headers, body})
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error('Error in Post /api/answer')
        // }
        res.json()
      }).then(console.log).catch(console.error)
  }
}
