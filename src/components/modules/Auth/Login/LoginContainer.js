import React, { PureComponent } from 'react'
import firebase from 'firebase'

import LoginScreen from 'components/modules/Auth/Login/LoginScreen'

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')

const TwitterProvider = new firebase.auth.TwitterAuthProvider()

class LoginContainer extends PureComponent {
  handleGoogleLogin = () => {
    firebase.auth().signInWithPopup(TwitterProvider).catch(
      (error) => console.log('A Google Login error occured, contact the admin 🔥', error)
    )
  }

  handleTwitterLogin = () => {
    firebase.auth().signInWithPopup(TwitterProvider).catch(
      (error) => console.log('A Twitter Login error occured, contact the admin 🔥', error)
    )
  }

  render () {
    return (
      <LoginScreen
        handleGoogleLogin={this.handleGoogleLogin}
        handleTwitterLogin={this.handleTwitterLogin}
      />
    )
  }
}

export default LoginContainer
