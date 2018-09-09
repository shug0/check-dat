import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import IndexRoutes from 'app/routes/IndexRoutes'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'app/constants/theme'

import 'normalize.css'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <React.Fragment>
            <ToastContainer />
            <IndexRoutes />
          </React.Fragment>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
