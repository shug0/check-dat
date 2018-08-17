import React, { Component } from 'react'
// import base from 'app/firebase/rebase'

import FriendsScreen from './FriendsScreen'

class FriendsContainer extends Component {
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

export default FriendsContainer
