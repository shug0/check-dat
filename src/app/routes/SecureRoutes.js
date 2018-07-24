import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from 'app/components/pages/app/HomePage'

const SecureRoutes = ({ dbUser }) => (
  <Switch>
    <Route exact path='/' render={() => <HomePage dbUser={dbUser} />} />
    <Redirect to='/' />
  </Switch>
)

SecureRoutes.propTypes = {
  dbUser: PropTypes.object.isRequired
}

export default SecureRoutes
