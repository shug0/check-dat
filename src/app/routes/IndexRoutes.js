import React, { PureComponent } from 'react'

import RenderSessionUserProps from 'app/firebase/containers/RenderSessionUserProps'
import LoadingScreen from 'app/components/pages/misc/LoadingScreen'
import SecureRoutesContainer from 'app/routes/SecureRoutesContainer'
import UnsecureRoutes from 'app/routes/UnsecureRoutes'

class IndexRoutes extends PureComponent {
  render () {
    return (
      <RenderSessionUserProps>
        {(userSession, loading) => {
          if (loading) return <LoadingScreen />

          return userSession ? (
            <SecureRoutesContainer user={userSession} />
          ) : (
            <UnsecureRoutes />
          )
        }}
      </RenderSessionUserProps>
    )
  }
}

export default IndexRoutes
