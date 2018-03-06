import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WrapperCard = styled.div`
  background-color: white;
  padding: ${props => props.padding || '3rem'};
  margin-bottom: 1rem;
`

class Card extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    const { children } = this.props

    return (
      <WrapperCard>
        {children}
      </WrapperCard>
    )
  }
}

export default Card
