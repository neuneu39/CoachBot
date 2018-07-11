import Vue from 'vue'
import VueRouter from 'vue-router'
import { RouterLinkStub, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(HelloWorld, { stubs: { RouterLink: RouterLinkStub } })
    expect(wrapper.find('.hello h1').element.textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
