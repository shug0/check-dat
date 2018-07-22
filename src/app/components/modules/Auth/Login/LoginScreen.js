import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Button from 'app/components/common/Button/Button'

class LoginScreen extends PureComponent {
  static propTypes = {
    handleGoogleLogin: PropTypes.func.isRequired,
    handleTwitterLogin: PropTypes.func.isRequired
  }

  render () {
    return (
      <React.Fragment>
        <Button color='primary' onClick={this.props.handleGoogleLogin}>
          Google Signin
        </Button>

        <Button color='secondary' onClick={this.props.handleTwitterLogin}>
          Twitter Signin
        </Button>
      </React.Fragment>
    )
  }
}

export default LoginScreen
