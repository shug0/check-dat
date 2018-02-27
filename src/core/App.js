import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import firebase from 'firebase'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import theme from 'core/constants/theme'
import ProtectedRouter from 'core/ProtectedRouter'

import LoginScreen from 'core/components/pages/login/LoginScreen'

class App extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;

    console.log(user)

    return (
      <Router>
        <ThemeProvider theme={theme}>
          {user ? (
            <Route path="/" component={ProtectedRouter} />
          ) : (
            <Route path="/" component={LoginScreen} />
          )}
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;