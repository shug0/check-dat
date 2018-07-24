import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SignupOrLoginScreen from 'app/components/modules/Auth/SignupOrLoginScreen'
import SignupScreen from 'app/components/modules/Auth/Signup/SignupScreen'
import LoginScreen from 'app/components/modules/Auth/Login/LoginScreen'

class UnsecureRoutes extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={SignupOrLoginScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/signup' component={SignupScreen} />
        <Redirect to='/' />
      </Switch>
    )
  }
}

export default UnsecureRoutes
