import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import NotFoundScreen from 'core/components/pages/misc/NotFoundScreen'
import HomeScreen from 'core/components/pages/app/HomeScreen'
import FriendsScreenContainer from 'core/components/modules/Friends/FriendsScreen/FriendsScreenContainer'

const SecuredRoutes = ({ user }) => (
  <Switch>
    <Route exact path='/' render={() => <HomeScreen user={user} />}/>
    <Route path='/friends' render={() => <FriendsScreenContainer user={user} />}/>
    <Route component={NotFoundScreen}/>
  </Switch>
)

SecuredRoutes.propTypes = {
  user: PropTypes.object.isRequired
}

export default SecuredRoutes