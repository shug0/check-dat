import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { StoryDecorator } from 'stories/decorators'

import { Button, Icon } from 'app/components/common'
const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

storiesOf('Common', module)
  .addDecorator(story => (
    <StoryDecorator>
      {story()}
    </StoryDecorator>
  ))
  .add('Button', () => (
    <ButtonsWrapper>
      <div>
        <Button onClick={() => {}}>Submit</Button>
      </div>
      <div>
        <Button color='secondary' onClick={() => {}}>Add to the dashboard</Button>
      </div>
      <div>
        <Button onClick={() => {}}><Icon name='send' />Submit Harder</Button>
      </div>
      <div>
        <Button color='primary' onClick={() => {}}><Icon name='build' />Add Stronger</Button>
      </div>
      <div>
        <Button color='warning' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>{"Just Don't"}</Button>
      </div>
    </ButtonsWrapper>
  ))
