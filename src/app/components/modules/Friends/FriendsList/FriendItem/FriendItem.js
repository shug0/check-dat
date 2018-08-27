import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card, Avatar } from 'app/components/common/index'

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  padding: 1.2rem 1rem;
  width: calc(50% - 0.7rem);
  margin-bottom: 1.2rem;
`

const Name = styled.span`
  margin-left: 2rem;
`

class FriendItem extends PureComponent {
  static propTypes = {
    friend: PropTypes.object.isRequired
  }

  static defaultProps = {
    friend: {}
  }

  render () {
    const { friend } = this.props

    return (
      <Wrapper>
        <Avatar user={friend} size='30px' />
        <Name>
          {friend.email}
        </Name>
      </Wrapper>
    )
  }
}

export default FriendItem
