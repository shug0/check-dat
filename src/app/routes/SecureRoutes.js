import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from 'app/components/pages/app/HomePage'

const SecureRoutes = ({ user }) => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' render={() => <HomePage user={user} />} />
      <Redirect to='/' />
    </Switch>
  </React.Fragment>
)

SecureRoutes.propTypes = {
  user: PropTypes.object.isRequired
}

export default SecureRoutes
