import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const Content = styled.section`
  padding: 2rem;
`

class FriendsScreen extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const { user } = this.props

    return (
      <Content>
        <h1>{`${user.displayName}'s Friends`}</h1>
      </Content>
    )
  }
}

export default FriendsScreen