import React, { PureComponent } from 'react'

import RenderSessionUserProps from 'app/firebase/containers/RenderSessionUserProps'
import LoadingPage from 'app/components/pages/misc/LoadingPage'
import SecureRoutesContainer from 'app/routes/SecureRoutesContainer'
import UnsecureRoutes from 'app/routes/UnsecureRoutes'

class IndexRoutes extends PureComponent {
  render () {
    return (
      <RenderSessionUserProps>
        {(userSession, loading) => {
          if (loading) return <LoadingPage />

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
