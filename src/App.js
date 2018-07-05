import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'constants/theme'
import InjectUserRenderHOC from 'firebase/containers/InjectUserRenderHOC'
import LoadingScreen from 'components/pages/misc/LoadingScreen'
import SecureRoutes from './routes/SecureRoutes'
import UnsecureRoutes from './routes/UnsecureRoutes'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <InjectUserRenderHOC>
              {(user, loading) => {
                if (loading) return <LoadingScreen />

                return user ? (
                  <SecureRoutes user={user} />
                ) : (
                  <UnsecureRoutes />
                )
              }}
            </InjectUserRenderHOC>
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
