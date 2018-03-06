import React, { PureComponent } from 'react'
import MyFirebase from 'core/firebase/MyFirebase'
import PropTypes from 'prop-types'

import FriendsScreen from './FriendsScreen'
import { searchUser } from "core/firebase/actions/friendsActions"

const rebase = MyFirebase.rebase

class FriendsScreenContainer extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  state = {
    friends: []
  }

  handleFriendSearch = (value) => {
    console.log('Searching...')
    searchUser(value)
      .then(snap => console.log(snap))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    const { user } = this.props

    rebase.syncState(`friends/${user.uid}`, {
      context: this,
      state: 'friends',
      asArray: true
    })
  }

  render () {
    return (
      <FriendsScreen
        user={this.props.user}
        friends={this.state.friends}
        handleFriendSearch={this.handleFriendSearch}
      />
    )
  }
}

export default FriendsScreenContainer
