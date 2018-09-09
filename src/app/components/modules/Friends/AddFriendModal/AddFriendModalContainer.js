import React, { Component } from 'react'
import PropTypes from 'prop-types'
import base from 'app/firebase/rebase'

import AddFriendModalScreen from './AddFriendModalScreen'

import { Modal } from 'app/components/common'
import { getUserByEmail } from '../actions'

class AddFriendModalContainer extends Component {
  state = {
    error: false,
    loading: false,
    userFound: null
  }

  static propTypes = {
    friends: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    addFriend: PropTypes.func.isRequired
  }

  searchUser = (email) => {
    this.setState({ loading: true })

    getUserByEmail(email)
      .then(data => {
        this.setState({ userFound: data[0], loading: false })
      }).catch(error => {
        this.setState({ userFound: null, loading: false, error })
      }).then(() => {
        this.setState({ loading: false })
      })
  }

  render () {
    const { error, userFound, loading } = this.state
    const { addFriend, isOpen, onRequestClose } = this.props

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <AddFriendModalScreen
          error={error}
          loading={loading}
          userFound={userFound}
          searchUser={this.searchUser}
          addFriend={addFriend}
          currentUserMail={base.initializedApp.auth().currentUser.email}
        />
      </Modal>
    )
  }
}

export default AddFriendModalContainer
