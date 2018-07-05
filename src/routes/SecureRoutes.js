import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomeScreen from 'components/pages/app/HomeScreen'
import FriendsScreenContainer from 'components/modules/Friends/FriendsScreen/FriendsScreenContainer'
import UserProfileScreenContainer from 'components/modules/User/UserProfile/UserProfileScreenContainer'

import HeaderBar from 'components/common/HeaderBar/HeaderBar'

const SecureRoutes = ({ user }) => (
  <React.Fragment>
    <HeaderBar user={user} />
    <Switch>
      <Route exact path='/' render={() => <HomeScreen user={user} />} />
      <Route path='/friends' render={() => <FriendsScreenContainer user={user} />} />
      <Route path='/profile' render={() => <UserProfileScreenContainer user={user} />} />
      <Redirect to='/' />
    </Switch>
  </React.Fragment>
)

SecureRoutes.propTypes = {
  user: PropTypes.object.isRequired
}

export default SecureRoutes
