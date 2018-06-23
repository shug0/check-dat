import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'components/common/stories/decorators'

import user from 'mocks/user'
import HeaderBar from './HeaderBar'

storiesOf('Common', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Header', () => (
    <HeaderBar user={user} />
  ))
