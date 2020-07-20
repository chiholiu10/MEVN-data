import {
    mount
} from '@vue/test-utils'
import DataField from './DataField.vue'

describe('DataField', () => {
    test('should mount', () => {
        const wrapper = mount(DataField)
        expect(wrapper.isVueInstance()).toBeTruthy()
    });
})