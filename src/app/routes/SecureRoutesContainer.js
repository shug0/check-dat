import React, { Component } from 'react'
import PropTypes from 'prop-types'

import base from 'app/firebase/rebase'

import HeaderBar from 'app/components/common/HeaderBar/HeaderBar'
import LoadingScreen from 'app/components/pages/misc/LoadingScreen'
import SignupContainer from 'app/components/modules/Auth/Signup/SignupContainer'

import SecureRoutes from 'app/routes/SecureRoutes'

class LoggedTemplate extends Component {
  state = {
    user: {},
    loading: true
  }

  componentDidMount () {
    const { uid } = this.props.user

    base.listenToDoc(`users/${uid}`, {
      context: this,
      then (data) {
        this.setState({
          user: data,
          loading: false
        })
      }
    })
  }

  render () {
    const { user, loading } = this.state
    const userIsCreated = !!user.email

    return (
      <React.Fragment>
        <HeaderBar user={this.props.user} />
        {loading && <LoadingScreen />}
        {!loading && userIsCreated ? (
          <SecureRoutes user={user} />
        ) : (
          <SignupContainer user={user} />
        )}
      </React.Fragment>
    )
  }
}

LoggedTemplate.propTypes = {
  user: PropTypes.object.isRequired
}

export default LoggedTemplate
