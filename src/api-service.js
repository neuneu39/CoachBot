import { ApiKeys } from './server/key-files.js'

export default {
  // postMessage: (message) => {
  //   const obj = {message: `${message}`}
  //   const method = 'POST'
  //   const body = JSON.stringify(obj)
  //   const headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  //   return fetch('./api/answer', {method, headers, body})
  //     .then((res) => res.json())
  // }
  postMessage: (message) => {
    const body = new FormData()
    body.append('apikey', ApiKeys.talkApi)
    body.append('query', `${message}`)
    const method = 'POST'

    return fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk', {method, body})
      .then(response => response.json())
      .then(data => {
        return {
          message: `${data.results[0].reply}`
        }
      })
  }
}
