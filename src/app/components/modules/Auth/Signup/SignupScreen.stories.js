import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'stories/decorators'
import SignupScreen from './SignupScreen'

const props = {}

storiesOf('Screens', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Signup', () => (
    <SignupScreen {...props} />
  ))
