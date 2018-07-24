import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderBar from 'app/components/common/HeaderBar/HeaderBar'
import LoadingPage from 'app/components/pages/misc/LoadingPage'
import SecureRoutes from 'app/routes/SecureRoutes'
import RenderDBUserProps from 'app/firebase/containers/RenderDBUserProps'

class SecureRoutesContainer extends Component {
  static propTypes = {
    userSession: PropTypes.object.isRequired
  }

  render () {
    const { userSession } = this.props
    return (
      <RenderDBUserProps uid={userSession.uid}>
        {(dbUser, loading) => (
          <React.Fragment>
            <HeaderBar user={userSession} />
            {loading && <LoadingPage />}
            {!loading && <SecureRoutes dbUser={dbUser} />}
          </React.Fragment>
        )}
      </RenderDBUserProps>
    )
  }
}

export default SecureRoutesContainer
