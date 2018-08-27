import React, { Component } from 'react'
// import base from 'app/firebase/rebase'

import FriendsAddScreen from './FriendsAddScreen'

class FriendsAddContainer extends Component {
  state = {
    error: false
  }

  render () {
    return (
      <FriendsAddScreen
        error={this.state.error}
      />
    )
  }
}

export default FriendsAddContainer
