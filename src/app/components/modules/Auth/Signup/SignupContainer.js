import React, { PureComponent } from 'react'

import base from 'app/firebase/rebase'

import SignupForm from 'app/components/form/SignupForm/SignupForm'

class SignupContainer extends PureComponent {
  addUserInDB = (values) => new Promise((resolve, reject) => {
    base.addToCollection('users', values)
      .then(() => {
        resolve()
      }).catch(err => {
        reject(err)
      })
  })

  createUserInAuth = values => (
    base.initializedApp.auth().createUserWithEmailAndPassword(values.email, values.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // ...
    })
  )

  render () {
    return (
      <SignupForm
        handleSubmit={this.createUserInAuth}
      />
    )
  }
}

export default SignupContainer
