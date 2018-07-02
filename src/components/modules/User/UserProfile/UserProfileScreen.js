import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from 'components/common/Card/Card'
import Avatar from 'components/common/Avatar'

const Content = styled.section`
  padding: 2rem;
`

class UserProfileScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const { user } = this.props

    console.log({ user })

    return (
      <Content>
        <h1>My Profile</h1>

        <Card>
          <Avatar user={user} size='90px' />
          <h2>{user.displayName}</h2>
          <article>
            <h4>Provider : </h4>
            <span>{user.providerData[0].providerId}</span>
          </article>
          <article>
            <h4>UID : </h4>
            <span>{user.uid}</span>
          </article>
        </Card>
      </Content>
    )
  }
}

export default UserProfileScreen
