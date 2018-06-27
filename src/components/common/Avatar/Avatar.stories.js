import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'components/stories/decorators'

import user from 'mocks/user'
import Avatar from './Avatar'

storiesOf('Common', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Avatar', () => (
    <Avatar user={user} size='50px' />
  ))
