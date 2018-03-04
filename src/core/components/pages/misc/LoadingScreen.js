import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from "core/constants/theme"

const LoadingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};
`

class LoadingScreen extends Component {
  render () {
    return (
      <LoadingWrapper>
        Loading...
      </LoadingWrapper>
    )
  }
}

export default LoadingScreen
