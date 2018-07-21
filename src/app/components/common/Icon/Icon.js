import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    const { name, ...props } = this.props

    return (
      <i className={`material-icons`} {...props}>{name}</i>
    )
  }
}

export default Icon
