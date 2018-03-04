import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

import HeaderBar from 'core/components/common/HeaderBar'
import InjectUserRenderHOC from 'core/firebase/containers/InjectUserRenderHOC'
import SecuredRoutes from "core/routes/SecuredRoutes"
import LoadingScreen from "core/components/pages/misc/LoadingScreen"

class SignedUserTemplate extends PureComponent {
  render () {
    return (
      <InjectUserRenderHOC>
        {(user, loading) => {
          if (loading) return <LoadingScreen/>

          return !user ? (
              <Redirect to='/login' />
            ) : (
              <React.Fragment>
                <HeaderBar user={user} />
                <SecuredRoutes user={user}/>
              </React.Fragment>
            )
          }
        }
      </InjectUserRenderHOC>
    )
  }
}

export default SignedUserTemplate