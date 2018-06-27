import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactAvatar from 'react-avatar'

class Avatar extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    size: PropTypes.string.isRequired
  }

  render () {
    const { user, size } = this.props

    return (
      <ReactAvatar round name={user.displayName} src={user.providerUserInfo[0].photoUrl} size={size} />
    )
  }
}

export default Avatar
