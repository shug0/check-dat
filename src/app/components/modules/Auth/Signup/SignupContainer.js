import React, { PureComponent } from 'react'
import base from 'app/firebase/rebase'
import SignupForm from 'app/components/form/SignupForm/SignupForm'

class SignupContainer extends PureComponent {
  state = {
    error: false
  }

  addUserInDB = (values) => new Promise((resolve, reject) => {
    base.addToCollection('users', values)
      .then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
  })

  createUserInAuth = values => (
    base.initializedApp.auth().createUserWithEmailAndPassword(
      values.email,
      values.password
    )
  )

  handleSignup = (values, setSubmitting) => {
    this.createUserInAuth(values)
      .then((infos) => {
        console.log('User successfully created', infos)
      })
      .catch(error => {
        this.setState({ error })
        setSubmitting(false)
      })
  }

  render () {
    return (
      <SignupForm
        handleSubmit={this.handleSignup}
        error={this.state.error}
      />
    )
  }
}

export default SignupContainer
