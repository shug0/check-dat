import React, { PureComponent } from 'react'
import PropTypes from "prop-types"

class HomeScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const { user } = this.props

    return (
      <h1>{`${user.displayItems}'s Friends`}</h1>
    )
  }
}

export default HomeScreen