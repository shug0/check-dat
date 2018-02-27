import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HeaderBar from 'core/components/molecules/HeaderBar'

const Wrapper = styled.main`

`

class DefaultTemplate extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    const { children } = this.props

    return (
      <Wrapper>
        <HeaderBar />
        {children}
      </Wrapper>
    )
  }
}

export default DefaultTemplate
