import apiService from '@/api-service'

describe('API Service: postMessage', () => {
  it('should render data correctely', () => {
    const messageText = {message: "いい天気ですね"}
    fetch.mockResponseOnce(JSON.stringify(messageText))
    apiService.postMessage('天気')
      .then((json) => {
        expect(json.message).toEqual(messageText.message)
      })
  })
  it('should return an error', () => {
    const e = new Error('error')
    fetch.mockReject(e)
    apiService.postMessage('天気')
      .catch(err => {
        expect(err).toBe(e)
      })
  })
})
