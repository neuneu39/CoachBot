import Vue from 'vue'
import { RouterLinkStub, mount, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Chat from '@/components/Chat'

Vue.use(VueRouter)

describe('Chat.vue', () => {
  it('render the correnct message', () => {
    const wrapper = shallowMount(Chat)
    expect(wrapper.vm.messageText).toBe('')
    expect(wrapper.vm.answerText).toEqual([])
  })
  it('should render correct contents', () => {
    const wrapper = shallowMount(Chat)
    expect(wrapper.is(Chat)).toBe(true)
  })
  it('should render input message', (done) => {
    const wrapper = shallowMount(Chat)
    const text = {message: 'いい天気ですね'}
    fetch.mockResponseOnce(JSON.stringify(text))

    wrapper.vm.messageText = 'hello'
    wrapper.find('button').trigger('submit')
    expect(wrapper.vm.ids).toEqual(1)
    expect(wrapper.vm.answerText.length).toEqual(1)

    // サーバーのレスポンスを待ってから
    setTimeout(() => {
      expect(wrapper.vm.ids).toEqual(2)
      expect(wrapper.vm.answerText.length).toEqual(2)
      done()
    }, 1000)
  })
  it('should return an error message', (done) => {
    fetch.mockReject(new Error('internal server error'))
    const wrapper = shallowMount(Chat)
    wrapper.vm.messageText = 'hello'
    wrapper.find('button').trigger('submit')

    expect(wrapper.vm.ids).toEqual(1)
    expect(wrapper.vm.answerText.length).toEqual(1)

    setTimeout(() => {
      expect(wrapper.vm.errorMessage).toBe('サーバーに問題が発生しました')
      done()
    }, 1000)
  })

  it('link shold be / ', () => {
    const wrapper = mount(Chat, { stubs: { RouterLink: RouterLinkStub } })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  })
})
