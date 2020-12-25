import { mount } from '@vue/test-utils'
import { HelloWorld } from '@'

describe('test HelloWorld', () => {
    it('should work', () => {
        const wrapper = mount(() => <HelloWorld />)

        expect(wrapper.find('div').text()).toEqual('Hello World!')
    })
})
