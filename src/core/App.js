import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'core/constants/theme'
import SignedUserTemplate from 'core/components/templates/SignedUserTemplate'
import LoginContainer from "./components/pages/login/LoginContainer"

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path='/login' component={LoginContainer} />
            <Route path='/' component={SignedUserTemplate} />
          </Switch>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App