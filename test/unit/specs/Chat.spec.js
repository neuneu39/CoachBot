import Vue from 'vue'
import Chat from '@/components/Chat'
import { mount, RouterLinkStub } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld'

describe('Chat.vue', () => {
  it('render the correnct message', () => {
    // const Constructor = Vue.extend(Chat)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.)
    const vm = new Vue(Chat).$mount()
    expect(vm.messageText).toBe('')
    expect(vm.answerText).toBe('')
  })
  it('should render correct contents', () => {
    const vm1 = mount(Chat)
    expect(vm1.is(Chat)).toBe(true)
  })
  it('should link correct', () => {
    // const localVue = createLocalVue()
    // localVue.use(VueRouter)
    // const router = new VueRouter()

    // shallowMount(Chat, {
    //   localVue,
    //   router
    // })
    const wrapper = mount(Chat, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  })
})
