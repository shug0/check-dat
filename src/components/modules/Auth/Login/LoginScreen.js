import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginTitle = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 3rem;
`

const LoginButton = styled.button`
  border: 0;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: ${key('colors.primary')};
  background-color: ${key('colors.accent')};
  border-radius: 5rem;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  transition: ease all 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`

class LoginScreen extends PureComponent {
  static propTypes = {
    handleGoogleLogin: PropTypes.func.isRequired,
    handleTwitterLogin: PropTypes.func.isRequired,
  }

  render () {
    return (
      <Wrapper>
        <LoginTitle>
          Check Dat !
        </LoginTitle>
        <LoginButton onClick={this.props.handleGoogleLogin}>
          Google Signin
        </LoginButton>

        <LoginButton onClick={this.props.handleTwitterLogin}>
          Twitter Signin
        </LoginButton>
      </Wrapper>
    )
  }
}

export default LoginScreen
