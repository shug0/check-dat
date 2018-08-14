import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

import LoginContainer from 'app/components/modules/Auth/Login/LoginContainer'

const FormWrapper = styled.div`
  margin: 2rem auto;
  width: ${key('comps.signupWrapper.w')};
  padding: 1rem 2rem;
`

const Wrapper = styled.section`
  height: ${({theme}) => `calc(100% - ${theme.comps.headerBar.h})`};
  display: flex;
  justify-content: center;
  align-items: center;
`

class SignupScreen extends PureComponent {
  render () {
    return (
      <Wrapper>
        <FormWrapper>
          <h2>Login</h2>
          <LoginContainer />
        </FormWrapper>
      </Wrapper>
    )
  }
}

export default SignupScreen
