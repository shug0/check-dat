import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderBar from 'app/components/common/HeaderBar/HeaderBar'
import LoadingPage from 'app/components/pages/misc/LoadingPage'
import SignupContainer from 'app/components/modules/Auth/Signup/SignupContainer'
import SecureRoutes from 'app/routes/SecureRoutes'
import RenderDBUserProps from 'app/firebase/containers/RenderDBUserProps'

class SecureRoutesContainer extends Component {
  render () {
    const { user } = this.props
    const userIsCreated = !user.email

    return (
      <RenderDBUserProps uid={user.uid}>
        {(user, loading) => (
          <React.Fragment>
            <HeaderBar user={this.props.user} />
            {loading && <LoadingPage />}
            {!loading && userIsCreated ? (
              <SecureRoutes user={user} />
            ) : (
              <SignupContainer user={user} />
            )}
          </React.Fragment>
        )}
      </RenderDBUserProps>
    )
  }
}

SecureRoutesContainer.propTypes = {
  user: PropTypes.object.isRequired
}

export default SecureRoutesContainer
