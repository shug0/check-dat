import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Button from 'app/components/common/Button'

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
        <Button to='/login'>Login</Button>
        <Button to='/signup'>Signup</Button>
      </Wrapper>
    )
  }
}

export default SignupOrLoginScreen
