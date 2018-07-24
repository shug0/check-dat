import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

import Card from 'app/components/common/Card/Card'
import SignupForm from 'app/components/modules/Auth/Signup/SignupContainer'

const FormWrapper = styled(Card)`
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
          <h2>Signup</h2>
          <SignupForm />
        </FormWrapper>
      </Wrapper>
    )
  }
}

export default SignupScreen
