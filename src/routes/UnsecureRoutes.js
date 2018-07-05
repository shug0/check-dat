import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SignupOrLoginScreen from 'components/modules/Auth/SignupOrLoginScreen'
import LoginContainer from 'components/modules/Auth/Login/LoginContainer'
import SignupContainer from 'components/modules/Auth/Signup/SignupContainer'

const UnsecureRoutes = () => (
  <Switch>
    <Route exact path='/' render={() => <SignupOrLoginScreen />} />
    <Route path='/login' render={() => <LoginContainer />} />
    <Route path='/signup' render={() => <SignupContainer />} />
    <Redirect to='/' />
  </Switch>
)

export default UnsecureRoutes
