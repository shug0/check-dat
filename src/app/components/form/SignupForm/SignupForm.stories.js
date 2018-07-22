import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'stories/decorators'
import SignupScreen from 'app/components/modules/Auth/Signup/SignupScreen'

const initialValues = {
  email: 'thomas@needacoffee.fr',
  pseudo: 'shug0'
}

storiesOf('Form', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Signup', () => (
    <SignupScreen initialValues={initialValues} />
  ))
