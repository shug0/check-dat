import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card, Avatar, Icon } from 'app/components/common'

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  padding: 1.2rem 1rem 1.2rem  1.5rem;
  width: calc(50% - 0.7rem);
  margin-bottom: 1.2rem;
`
const DeleteIcon = styled(Icon)`
  cursor: pointer;
  padding: 1rem;
  margin-left: auto;
`

const Name = styled.span`
  margin-left: 1.5rem;
  font-size: 1.2rem;
  font-weight: ${({theme}) => theme.fontsWeight.light};
`

class userItem extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    removeFriend: PropTypes.func.isRequired
  }

  static defaultProps = {
    user: {}
  }

  render () {
    const { user, removeFriend } = this.props

    return (
      <Wrapper>
        <Avatar user={user} size='40px' />
        <Name>
          {user.pseudo}
        </Name>
        <DeleteIcon size='1.3rem' name='delete' onClick={() => removeFriend(user.uid)} />
      </Wrapper>
    )
  }
}

export default userItem
