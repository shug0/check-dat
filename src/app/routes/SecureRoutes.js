import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomeScreen from 'app/components/pages/app/HomeScreen'

const SecureRoutes = ({ user }) => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' render={() => <HomeScreen user={user} />} />
      <Redirect to='/' />
    </Switch>
  </React.Fragment>
)

SecureRoutes.propTypes = {
  user: PropTypes.object.isRequired
}

export default SecureRoutes
