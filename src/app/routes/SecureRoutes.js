import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from 'app/components/pages/app/HomePage'
import FriendsPage from 'app/components/pages/app/FriendsPage'

const SecureRoutes = ({ dbUser }) => (
  <Switch>
    <Route exact path='/' render={() => <HomePage dbUser={dbUser} />} />
    <Route path='/friends' render={() => <FriendsPage dbUser={dbUser} />} />
    <Redirect to='/' />
  </Switch>
)

SecureRoutes.propTypes = {
  dbUser: PropTypes.object.isRequired
}

export default SecureRoutes
