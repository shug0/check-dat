import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import NotFoundScreen from 'core/components/pages/misc/NotFoundScreen'
import HomeScreen from 'core/components/pages/app/HomeScreen'
import FriendsScreen from 'core/components/pages/app/FriendsScreen'

const SecuredRoutes = ({ user }) => (
  <Switch>
    <Route path='/' render={() => <HomeScreen user={user} />}/>
    <Route path='/friends' render={() => <FriendsScreen user={user} />}/>
    <Route component={NotFoundScreen}/>
  </Switch>
)

SecuredRoutes.propTypes = {
  user: PropTypes.object.isRequired
}

export default SecuredRoutes