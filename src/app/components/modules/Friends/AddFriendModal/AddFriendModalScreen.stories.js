import React from 'react'
import { storiesOf } from '@storybook/react'
import user from '../../../../../mocks/user'

import { StoryDecorator } from 'stories/decorators'
import AddFriendModalScreen from './AddFriendModalScreen'

storiesOf('Friends Add', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Add a friends', () => (
    <AddFriendModalScreen
      error={null}
      loading={false}
      userFound={{ email: 'thomas@needacoffee.fr' }}
      searchUser={() => {}}
      currentUserMail={user}
    />
  ))
