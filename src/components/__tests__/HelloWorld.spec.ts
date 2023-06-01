import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Introduction from '../Introduction.vue'

describe('Introduction', () => {
  it('renders properly', () => {
    const wrapper = mount(Introduction, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
