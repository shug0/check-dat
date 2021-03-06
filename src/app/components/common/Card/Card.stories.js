import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'stories/decorators'
import Card from './Card'

storiesOf('Common', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Card', () => (
    <Card>
      Yolo
    </Card>
  ))
