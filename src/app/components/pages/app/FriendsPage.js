import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Wrapper } from 'app/components/common'
import FriendsListContainer from 'app/components/modules/Friends/FriendsList/FriendsListContainer'
import AddFriendModalContainer from 'app/components/modules/Friends/AddFriendModal/AddFriendModalContainer'

class HomePage extends Component {
  render () {
    return (
      <Wrapper>
        <Switch>
          <Route exact path='/friends' component={FriendsListContainer} />
          <Route path='/friends/add' component={AddFriendModalContainer} />
        </Switch>
      </Wrapper>
    )
  }
}

export default HomePage
