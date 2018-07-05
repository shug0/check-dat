import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Button from 'components/common/Button/Button'

import { theme } from 'constants/theme'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - ${theme.comps.headerBar.h});
`

const Content = styled.div`
  padding: 2rem;
  display: flex;
  
  section {
    padding: 3rem;
  }
  
  section:first-child {
    border-right: 1px solid #999;
  }
`

class SignupOrLoginScreen extends PureComponent {
  render () {
    return (
      <Wrapper>
        <Content>
          <section>
            <Button to='/login'>Login</Button>
          </section>

          <section>
            <Button to='/signup'>Signup</Button>
          </section>
        </Content>
      </Wrapper>
    )
  }
}

export default SignupOrLoginScreen
