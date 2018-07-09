import React, { PureComponent } from 'react'
import IndexRoutes from 'app/routes/IndexRoutes'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'app/constants/theme'

import 'normalize.css'

class App extends PureComponent {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <IndexRoutes />
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
