import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconWrapper = styled.i`
  font-size: ${props => props.size || '1rem'} !important;
`

class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render () {
    const { name, className, ...props } = this.props

    return (
      <IconWrapper className={`material-icons ${className}`} {...props}>{name}</IconWrapper>
    )
  }
}

export default Icon
