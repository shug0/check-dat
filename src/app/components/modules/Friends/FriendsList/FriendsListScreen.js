import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Card, Icon } from 'app/components/common/index'

import FriendItem from './FriendItem/index'

const Wrapper = styled.section`
  width: 100%;
`

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

class FriendsListScreen extends PureComponent {
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
          <h2>Friends List</h2>
          <AddButton color='primary' to='friends/add'>
            <Icon name='person_add' size='1.3rem' />
            Add Friend
          </AddButton>
        </Header>
        {friends.length ? (
          <FriendList>
            {friends.map(friend => <FriendItem key={friend.uid} friend={friend} />)}
          </FriendList>
        ) : (
          <Card>You have no friends. ¯\_(ツ)_/¯</Card>
        )}
      </Wrapper>
    )
  }
}

export default FriendsListScreen
