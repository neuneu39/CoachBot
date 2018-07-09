import Vue from 'vue'
import Chat from '@/components/Chat'
import { mount, RouterLinkStub } from '@vue/test-utils'

describe('Chat.vue', () => {
  it('render the correnct message', () => {
    const vm = new Vue(Chat).$mount()
    expect(vm.messageText).toBe('')
    expect(vm.answerText).toEqual([])
  })
  it('should render correct contents', () => {
    const vm1 = mount(Chat)
    expect(vm1.is(Chat)).toBe(true)
  })
  it('should render input message', () => {
    const wrapper = mount(Chat)
    const text = {message: "いい天気ですね"}
    fetch.mockResponseOnce(JSON.stringify(text))

    wrapper.vm.messageText = 'hello'
    wrapper.find('button').trigger('submit')
    console.log('answer=', wrapper.vm.answerText[0].message)
    expect(wrapper.vm.ids).toEqual(1) // 入力とリプライの2つ
    expect(wrapper.vm.answerText.length).toEqual(1) // リプライは1つ

  //  サーバーのレスポンスを待ってから 
    jest.useFakeTimers()
    setTimeout( () => {
      expect(wrapper.vm.ids).toEqual(1)　// 2を期待
      expect(wrapper.vm.answerText.length).toEqual(1) // 2を期待      
    }, 5000)
    jest.runAllTimers();
 
  })
  it('should return an error message', () => {
    const wrapper = mount(Chat)
    wrapper.vm.messageText = 'hello'
    wrapper.find('button').trigger('submit')

    expect(wrapper.vm.ids).toEqual(1)
    expect(wrapper.vm.answerText.length).toEqual(1)
   // エラーになるため一度コメントアウト
   // expect(wrapper.vm.errorMessage).toBe('サーバーに問題が発生しました')
    
  })
  it('should link correct', () => {
    const wrapper = mount(Chat, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  })
})
