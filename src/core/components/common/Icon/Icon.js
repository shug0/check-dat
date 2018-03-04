import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    const { name, className, ...props } = this.props

    return (
      <i className={`material-icons ${className}`} {...props}>{name}</i>
    )
  }
}

export default Icon
