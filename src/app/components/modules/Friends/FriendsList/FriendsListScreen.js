import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'app/components/common/index'
import { toast } from 'react-toastify'

import AddFriendModalContainer from '../AddFriendModal/AddFriendModalContainer'
import { Wrapper, Header, AddButton, FriendList } from './StyledComponents'
import FriendItem from './FriendItem/index'

class FriendsListScreen extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    removeFriend: PropTypes.func.isRequired,
    friends: PropTypes.object.isRequired
  }

  state = { isModalOpen: false }

  closeModal = () => this.setState({ isModalOpen: false })
  openModal = () => this.setState({ isModalOpen: true })

  addFriendAndCloseModal = (friend) => {
    this.props.addFriend(friend)
    toast.success(`${friend.pseudo} was correctly added to your friends.`)
    this.closeModal()
  }

  render () {
    const { friends, removeFriend } = this.props
    const friendsArray = Object.keys(friends).map(key => friends[key])

    return (
      <Wrapper>
        <Header>
          <h2>Friends List</h2>
          <AddButton color='primary' onClick={this.openModal}>
            <Icon name='person_add' size='1.3rem' />
            Add Friend
          </AddButton>
        </Header>

        <AddFriendModalContainer
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          addFriend={this.addFriendAndCloseModal}
          friends={friends}
        />

        {friendsArray.length ? (
          <FriendList>
            {friendsArray.map(friend => (
              <FriendItem
                key={friend.uid}
                user={friend}
                removeFriend={removeFriend}
              />
            ))}
          </FriendList>
        ) : (
          <Card>You have no friends. ¯\_(ツ)_/¯</Card>
        )}
      </Wrapper>
    )
  }
}

export default FriendsListScreen
