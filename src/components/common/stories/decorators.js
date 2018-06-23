import React from 'react'
import theme from 'constants/theme'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'

export const StoryDecorator = (props) => (
  <MemoryRouter initialEntries={['/']}>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </MemoryRouter>
)

StoryDecorator.propTypes = {
  children: PropTypes.node.isRequired
}
