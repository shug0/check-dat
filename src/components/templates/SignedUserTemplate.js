import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

import HeaderBar from 'components/common/HeaderBar'
import InjectUserRenderHOC from 'firebase/containers/InjectUserRenderHOC'
import SecuredRoutes from 'routes/SecuredRoutes'
import LoadingScreen from 'components/pages/misc/LoadingScreen'

class SignedUserTemplate extends PureComponent {
  render () {
    return (
      <InjectUserRenderHOC>
        {(user, loading) => {
          if (loading) return <LoadingScreen />

          return !user ? (
            <Redirect to='/login' />
          ) : (
            <React.Fragment>
              <HeaderBar user={user} />
              <SecuredRoutes user={user} />
            </React.Fragment>
          )
        }
        }
      </InjectUserRenderHOC>
    )
  }
}

export default SignedUserTemplate
