import Vue from 'vue'
import Chat from '@/components/Chat'
import { mount, RouterLinkStub, shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { wrap } from 'module';


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
  it('should render input message', (done) => {
    const wrapper = mount(Chat)
    const text = {message: "いい天気ですね"}
    fetch.mockResponseOnce(JSON.stringify(text))

    wrapper.vm.messageText = 'hello'
    wrapper.find('button').trigger('submit')
    expect(wrapper.vm.ids).toEqual(1)
    expect(wrapper.vm.answerText.length).toEqual(1)

  //  サーバーのレスポンスを待ってから 
    setTimeout(() => {
      expect(wrapper.vm.ids).toEqual(2)
      expect(wrapper.vm.answerText.length).toEqual(2)
      done()
    }, 1000)
  })
  it('should return an error message', (done) => {
    fetch.mockReject( new Error('internal server error'))
    const wrapper = mount(Chat)
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
    Vue.use(VueRouter);
    
    const wrapper = mount(Chat, {
      stubs: {
        'router-link': RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  })
})
