import React from 'react'

import InjectUserRenderHOC from 'app/firebase/containers/InjectUserRenderHOC'
import LoadingScreen from 'app/components/pages/misc/LoadingScreen'
import SecureRoutesContainer from 'app/routes/SecureRoutesContainer'
import UnsecureRoutes from 'app/routes/UnsecureRoutes'

const App = () => (
  <InjectUserRenderHOC>
    {(userSession, loading) => {
      if (loading) return <LoadingScreen />

      return userSession ? (
        <SecureRoutesContainer user={userSession} />
      ) : (
        <UnsecureRoutes />
      )
    }}
  </InjectUserRenderHOC>
)

export default App
