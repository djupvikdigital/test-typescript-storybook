import { storiesOf } from '@storybook/react'
import { createElement as r } from 'react'

import Component from './index.ts'

storiesOf('Component', module).add('default', () => r(Component))
