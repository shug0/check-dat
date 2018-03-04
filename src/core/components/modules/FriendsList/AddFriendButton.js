import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import theme from 'core/constants/theme'
import Icon from 'core/components/common/Icon'

const AddFriendButtonWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  text-decoration: none;
`

const AddIcon = styled(Icon)`
  color: ${theme.colors.lightGrey};
  font-size: ${theme.comps.friendsAvatar.s};
`

class AddFriendButton extends PureComponent {
  render () {
    return (
      <AddFriendButtonWrapper to='/friends'>
        <AddIcon name='add_circle' />
      </AddFriendButtonWrapper>
    )
  }
}

export default AddFriendButton
