import {
    mount,
    shallowMount
} from '@vue/test-utils'
import DataField from './DataField.vue'

jest.mock("axios");

jest.mock("axios", () => ({
    get: () => Promise.resolve({
        data: [{
                "name": "A",
                "description": "This is a description of A",
                "parentId": ""
            },
            {
                "name": "B",
                "description": "This is a description of B",
                "parent": "A"
            },
            {
                "name": "C",
                "description": "This is a description of C",
                "parent": "A"
            },
            {
                "name": "D",
                "description": "This is a description of D",
                "parent": "A"
            },
            {
                "name": "B-1",
                "description": "This is a description of B-1",
                "parent": "B"
            },
            {
                "name": "B-2",
                "description": "This is a description of B-2",
                "parent": "B"
            },
            {
                "name": "B-3",
                "description": "This is a description of B-3",
                "parent": "B"
            }
        ]
    })
}));

describe('DataField', () => {
    test('check length of list data', () => {
        const wrapper = shallowMount(DataField)
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.listData.length).toBe(7);
        });
    });

    test('should mount', () => {
        const wrapper = mount(DataField)
        expect(wrapper.isVueInstance()).toBeTruthy()
    });
})