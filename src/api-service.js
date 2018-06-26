const WordMap = ['daikichi', 'cyukichi', 'shokichi']

function omikuji () {
  return Math.floor(Math.random() * 3)
}
export default {
  getReply: () => {
    const options = {
      method: 'GET'
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
  }
}
