import React, { PureComponent } from 'react'
import styled from 'styled-components'

import LoginContainer from './Login/LoginContainer'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100%);
`

class SignupOrLoginScreen extends PureComponent {
  render () {
    return (
      <Wrapper>
        <h2>Signup or Login</h2>
        <LoginContainer />
      </Wrapper>
    )
  }
}

export default SignupOrLoginScreen
