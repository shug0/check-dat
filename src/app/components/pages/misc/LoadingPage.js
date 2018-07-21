import React, { Component } from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  height: 50px;
`

class LoadingPage extends Component {
  render () {
    return (
      <LoadingWrapper>
        <Img src="https://zippy.gfycat.com/SkinnySeveralAsianlion.gif" alt=""/>
      </LoadingWrapper>
    )
  }
}

export default LoadingPage
