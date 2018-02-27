import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const Wrapper = styled.div``

class LoginScreen extends PureComponent {
  handleLogin = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
    }).catch(function(error) {
      console.log(error)
    })
  }

  render () {
    return (
      <Wrapper>
        <h1>Login</h1>
        <button onClick={this.handleLogin}>
          Login
        </button>
      </Wrapper>
    )
  }
}

export default LoginScreen
