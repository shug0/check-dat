import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Wrapper } from 'app/components/common'
import FriendsListContainer from 'app/components/modules/Friends/FriendsList/FriendsListContainer'
import FriendsAddContainer from 'app/components/modules/Friends/FriendsAdd/FriendsAddContainer'

class HomePage extends Component {
  render () {
    return (
      <Wrapper>
        <Switch>
          <Route exact path='/friends' component={FriendsListContainer} />
          <Route path='/friends/add' component={FriendsAddContainer} />
        </Switch>
      </Wrapper>
    )
  }
}

export default HomePage
