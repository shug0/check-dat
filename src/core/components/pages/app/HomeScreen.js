import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FriendsList from 'core/components/modules/Friends/FriendsList/FriendsListContainer'
import { theme } from 'core/constants/theme'

const Wrapper = styled.section`
  display: flex;
  height: calc(100% - ${theme.comps.headerBar.h});
`

const Content = styled.div`
  padding: 2rem;
`

class HomeScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const { user } = this.props

    return (
      <Wrapper>
        <FriendsList user={user} />
        <Content>
          <h1>Ici y aura les liens / musiques et autres trucs</h1>
        </Content>
      </Wrapper>
    )
  }
}

export default HomeScreen