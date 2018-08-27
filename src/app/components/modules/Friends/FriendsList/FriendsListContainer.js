import React, { Component } from 'react'
// import base from 'app/firebase/rebase'

import FriendsScreen from './FriendsListScreen'

class FriendsListContainer extends Component {
  state = {
    error: false
  }

  render () {
    return (
      <FriendsScreen
        error={this.state.error}
      />
    )
  }
}

export default FriendsListContainer
