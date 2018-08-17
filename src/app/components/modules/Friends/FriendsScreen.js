import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'app/components/common'

import FriendItem from './FriendItem'

const Wrapper = styled.section``

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AddButton = styled(Button)`
  margin-bottom: 0;
  font-size: ${({theme}) => theme.fonts.small};
`

const FriendList = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`

class SignupOrLoginScreen extends PureComponent {
  static propTypes = {
    friends: PropTypes.array
  }

  static defaultProps = {
    friends: []
  }

  render () {
    const { friends } = this.props

    return (
      <Wrapper>
        <Header>
          <h2>Friends Screen</h2>
          <AddButton color='primary'>
            Find Friend
          </AddButton>
        </Header>
        {friends.length ? (
          <FriendList>
            {friends.map(friend => <FriendItem key={friend.uid} friend={friend} />)}
          </FriendList>
        ) : (
          <span>You have no friends. ¯\_(ツ)_/¯</span>
        )}
      </Wrapper>
    )
  }
}

export default SignupOrLoginScreen
