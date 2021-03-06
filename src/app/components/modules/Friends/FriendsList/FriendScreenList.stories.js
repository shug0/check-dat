import React from 'react'
import Chance from 'chance'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'stories/decorators'
import FriendsScreen from './FriendsListScreen'

const chance = new Chance()

const friends = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''].map(() => ({
  uid: chance.guid(),
  email: chance.email()
}))

storiesOf('Friends List', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('No friends', () => (
    <FriendsScreen />
  ))
  .add('With friends', () => (
    <FriendsScreen friends={friends} />
  ))
