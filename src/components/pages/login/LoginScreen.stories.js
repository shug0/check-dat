import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'components/stories/decorators'
import LoginScreen from './LoginScreen'

const props = {
  handleGoogleLogin: () => {},
  handleTwitterLogin: () => {}
}

storiesOf('Screens', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Login', () => (
    <LoginScreen {...props} />
  ))
