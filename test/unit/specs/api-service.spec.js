import apiService from '@/api-service'

describe('API Service: postMessage', () => {
  it('should render data correctely', () => {
    fetch.mockResponseOnce(JSON.stringify(
      {
        message: 'いい天気ですね'
      }
    ))
    apiService.postMessage('天気')
      .then((json) => {
        expect(json.message).tobe('いい天気ですね')
      })
  })
  it('should return a error', () => {
    fetch.mockResponseOnce(null)
    apiService.postMessage('天気')
      .then((json) => {
        expect(json.err).tobe('エラー')
      })
  })
})
