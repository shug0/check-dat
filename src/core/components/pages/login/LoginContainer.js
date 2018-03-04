import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase'
import InjectUserRenderHOC from 'core/firebase/containers/InjectUserRenderHOC'

import LoginScreen from './LoginScreen'
import LoadingScreen from "core/components/pages/misc/LoadingScreen"

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const TwitterProvider = new firebase.auth.TwitterAuthProvider();

class LoginContainer extends PureComponent {
  handleGoogleLogin = () => {
    firebase.auth().signInWithPopup(GoogleProvider).then(function(result) {
    }).catch(function(error) {
      alert('A error occured, contact the admin 🔥')
      console.log(error)
    })
  }

  handleTwitterLogin = () => {
    firebase.auth().signInWithPopup(TwitterProvider).then(function(result) {
    }).catch(function(error) {
      alert('A error occured, contact the admin 🔥')
      console.log(error)
    })
  }

  render () {
    return (
      <InjectUserRenderHOC>
        {(user, loading) => {
          if (loading) return <LoadingScreen />

          return user ? (
            <Redirect to={'/'}/>
          ) : (
            <LoginScreen
              handleGoogleLogin={this.handleGoogleLogin}
              handleTwitterLogin={this.handleTwitterLogin}
            />
          )
        }}
      </InjectUserRenderHOC>
    )
  }
}

export default LoginContainer
