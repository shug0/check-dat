import React from 'react'
import theme from 'app/constants/theme'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { Wrapper } from 'app/components/common'

export const StoryDecorator = ({ children, noWrapper }) => (
  <MemoryRouter initialEntries={['/']}>
    <ThemeProvider theme={theme}>
      {noWrapper ? (
        children
      ) : (
        <Wrapper>
          {children}
        </Wrapper>
      )}
    </ThemeProvider>
  </MemoryRouter>
)

StoryDecorator.propTypes = {
  children: PropTypes.node.isRequired,
  noWrapper: PropTypes.bool
}
