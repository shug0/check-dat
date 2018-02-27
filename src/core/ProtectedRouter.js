import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DefaultTemplate from 'core/components/templates/DefaultTemplate'
import NotFoundScreen from 'core/components/pages/misc/NotFoundScreen'
import HomeScreen from 'core/components/pages/app/HomeScreen'

export default () => (
  <DefaultTemplate>
    <Switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route component={NotFoundScreen}/>
    </Switch>
  </DefaultTemplate>
)