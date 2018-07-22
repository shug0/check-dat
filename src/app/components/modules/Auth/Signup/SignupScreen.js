import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { key } from 'styled-theme'

import Card from 'app/components/common/Card/Card'
import SignupForm from 'app/components/form/SignupForm/SignupForm'

const Wrapper = styled(Card)`
  margin: 2rem auto;
  max-width: ${key('comps.signupWrapper.w')};
  padding: 1rem 2rem;
`

class SignupScreen extends PureComponent {
  static propTypes = {
    initialValues: PropTypes.object
  }

  render () {
    const { initialValues } = this.props
    return (
      <Wrapper>
        <h2>Signup</h2>
        <SignupForm initialValues={initialValues}/>
      </Wrapper>
    )
  }
}

export default SignupScreen
