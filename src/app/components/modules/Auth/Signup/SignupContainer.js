import React, { PureComponent } from 'react'
import base from 'app/firebase/rebase'
import SignupForm from 'app/components/form/SignupForm/SignupForm'

class SignupContainer extends PureComponent {
  state = {
    error: false
  }

  addUserInDB = (user, formValues) => new Promise((resolve, reject) => {
    const userDataToStore = {
      uid: user.uid,
      pseudo: formValues.pseudo,
      email: user.providerData[0].email
    }
    base.addToCollection('users', userDataToStore, user.uid)
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
      .then((user) => this.addUserInDB(user, values))
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
