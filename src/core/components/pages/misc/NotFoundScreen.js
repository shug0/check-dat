import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class NotFoundScreen extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        Not found
      </div>
    )
  }
}

export default NotFoundScreen
