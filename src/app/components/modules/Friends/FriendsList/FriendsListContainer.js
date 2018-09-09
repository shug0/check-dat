import React, { Component } from 'react'
import base from 'app/firebase/rebase'

import FriendsScreen from './FriendsListScreen'

class FriendsListContainer extends Component {
  state = {
    friends: {}
  }

  componentDidMount () {
    const uid = base.initializedApp.auth().currentUser.uid

    base.syncDoc(`friends/${uid}`, {
      context: this,
      state: 'friends'
    })
  }

  addFriend = (newFriend) => {
    const { friends } = this.state
    const mutedFriends = {
      ...friends,
      [newFriend.uid]: newFriend
    }
    this.setState({ friends: mutedFriends })
  }

  removeFriend = (uid) => {
    const { friends } = this.state
    const mutedFriends = { ...friends }
    delete mutedFriends[uid]
    this.setState({ friends: mutedFriends })
  }

  render () {
    return (
      <FriendsScreen
        friends={this.state.friends}
        addFriend={this.addFriend}
        removeFriend={this.removeFriend}
      />
    )
  }
}

export default FriendsListContainer
