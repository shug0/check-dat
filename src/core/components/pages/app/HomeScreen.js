import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
`

class HomeScreen extends PureComponent {
  static propTypes = {
  }

  render () {

    return (
      <Wrapper>
        <h1>
          Welcome
        </h1>
      </Wrapper>
    )
  }
}

export default HomeScreen
