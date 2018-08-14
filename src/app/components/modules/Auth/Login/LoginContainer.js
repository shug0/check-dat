import React, { Component } from 'react'
import base from 'app/firebase/rebase'

import LoginForm from 'app/components/form/LoginForm/LoginForm'

class LoginContainer extends Component {
  state = {
    error: false
  }

  handleLogin = (values, setSubmitting) => (
    base.initializedApp.auth().signInWithEmailAndPassword(
      values.email,
      values.password
    )
      .then((infos) => {
        console.log('User successfully logged', infos)
      })
      .catch(error => {
        console.log('NOPE', error)
        this.setState({ error })
        setSubmitting(false)
      })
  )

  render () {
    return (
      <LoginForm
        error={this.state.error}
        handleSubmit={this.handleLogin}
      />
    )
  }
}

export default LoginContainer
