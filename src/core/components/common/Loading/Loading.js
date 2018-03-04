import React, { Component } from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Loading extends Component {
  render () {
    return (
      <LoadingWrapper>
        Loading...
      </LoadingWrapper>
    )
  }
}

export default Loading
