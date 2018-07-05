import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from 'constants/theme'
import { Link } from 'react-router-dom'

const ButtonStyle = css`
  padding: 0.5rem 1rem;
  color: white;
  background: ${theme.colors.accent};
  text-decoration: none;
`

const LinkWrapper = styled(Link)`${ButtonStyle}`
const ButtonWrapper = styled.button`${ButtonStyle}`

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    size: '20px'
  }

  render () {
    const { children, to, onClick } = this.props

    return to ? (
      <LinkWrapper to={to}>{children}</LinkWrapper>
    ) : (
      <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
    )
  }
}

export default Button
