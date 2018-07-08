import Vue from 'vue'
import Chat from '@/components/Chat'
import { mount, RouterLinkStub } from '@vue/test-utils'

describe('Chat.vue', () => {
  it('render the correnct message', () => {
    // const Constructor = Vue.extend(Chat)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.)
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
    wrapper.messageText = 'hello'
    wrapper.find('button').trigger('submit')
    expect(wrapper.vm.ids).toEqual(1)
    expect(wrapper.vm.answerText.length).toEqual(1)
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
