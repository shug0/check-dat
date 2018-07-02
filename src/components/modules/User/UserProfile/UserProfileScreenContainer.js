import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import UserProfileScreen from './UserProfileScreen'
import MyFirebase from 'firebase/MyFirebase'

const rebase = MyFirebase.rebase

class UserProfileScreenContainer extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  state = {
    currentUser: {},
    loading: true
  }

  componentDidMount () {
    const { user } = this.props

    rebase.syncState(`users/full/${user.uid}`, {
      context: this,
      state: 'currentUser',
      then: () => this.setState({ loading: false })
    })
  }

  render () {
    if (this.state.loading) return 'Loading...'

    return (
      <UserProfileScreen
        user={this.state.currentUser}
      />
    )
  }
}

export default UserProfileScreenContainer
