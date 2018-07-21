import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { LinkWrapper, ButtonWrapper, VanillaLinkWrapper } from './ButtonStyles'

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary', 'warning'])
  }

  render () {
    const { children, to, onClick, href, color } = this.props

    if (to) {
      return (
        <LinkWrapper
          color={color}
          to={to}>
          {children}
        </LinkWrapper>
      )
    }

    if (onClick) {
      return (
        <ButtonWrapper
          color={color}
          onClick={onClick}>
          {children}
        </ButtonWrapper>
      )
    }

    if (href) {
      return (
        <VanillaLinkWrapper
          color={color}
          href={href}>
          {children}
        </VanillaLinkWrapper>
      )
    }
  }
}

export default Button
