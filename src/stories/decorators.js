import React from 'react'
import theme from 'app/constants/theme'
import PropTypes from 'prop-types'

import styled, { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'

const Wrapper = styled.section`
  padding: ${props => props.withoutWrapper ? '0' : '3rem'};
`

export const StoryDecorator = ({ children, withoutWrapper }) => (
  <Wrapper withoutWrapper={withoutWrapper}>
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MemoryRouter>
  </Wrapper>
)

StoryDecorator.propTypes = {
  withoutWrapper: PropTypes.bool,
  children: PropTypes.node.isRequired
}
