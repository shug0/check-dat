import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class SignupScreen extends PureComponent {
  render () {
    return (
      <Wrapper>
        <h2>Signup</h2>
        <p>Signup please bro</p>
      </Wrapper>
    )
  }
}

export default SignupScreen
