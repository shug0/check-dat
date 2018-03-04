import React, { PureComponent } from 'react'
import MyFirebase from 'core/firebase/MyFirebase'
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'

import FriendList from './FriendsList'

const rebase = MyFirebase.rebase

class FriendsListContainer extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    friends: []
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
    const { friends } = this.state

    return (
      <FriendList
        friends={friends}
      />
    )
  }
}

export default withRouter(FriendsListContainer)
