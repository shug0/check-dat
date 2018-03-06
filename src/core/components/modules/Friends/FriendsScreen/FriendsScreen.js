import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

import Card from "core/components/common/Card/Card"
import SearchInput from '../SearchInput/'

const Content = styled.section`
  padding: 2rem;
`

class FriendsScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    friends: PropTypes.array.isRequired,
    handleFriendSearch: PropTypes.func.isRequired,
  }

  render () {
    const { user, friends } = this.props

    const hasFriends = !!friends.length

    return (
      <Content>
        <h1>{`${user.displayName}'s Friends`}</h1>
        <Card>
          <SearchInput handleSearch={this.props.handleFriendSearch} />
        </Card>
        <Card>
          {hasFriends ? (
            <ul>
              <li>Friends 1</li>
              <li>Friends 2</li>
            </ul>
          ) : (
            <p>Aucun amis pour l'instant</p>
          )}
        </Card>
      </Content>
    )
  }
}

export default FriendsScreen