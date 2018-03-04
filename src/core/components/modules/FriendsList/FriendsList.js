import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'core/constants/theme'
import AddFriendButton from "./AddFriendButton"

const FriendListWrapper = styled.div`
  height: 100%;
  width: ${theme.comps.friendsBar.w};
  background-color: ${theme.colors.lightPrimary};
`

class FriendsList extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired,
  }

  render () {
    const { friends } = this.props

    console.log(friends)

    return (
      <FriendListWrapper>
        <AddFriendButton />
      </FriendListWrapper>
    )
  }
}

export default FriendsList
