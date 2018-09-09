import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'stories/decorators'

import user from 'mocks/user'
import HeaderBar from './HeaderBar'

storiesOf('Common', module)
  .addDecorator(story => (
    <StoryDecorator noWrapper>
      {story()}
    </StoryDecorator>
  ))
  .add('Header', () => (
    <HeaderBar user={user} />
  ))
