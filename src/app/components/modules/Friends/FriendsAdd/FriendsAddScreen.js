import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Card, Icon } from 'app/components/common/index'

const Wrapper = styled.section`
  width: 100%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BackButton = styled(Button)`
  margin-bottom: 0;
  font-size: ${({theme}) => theme.fonts.small};
`

class FriendsAddScreen extends PureComponent {
  static propTypes = {
    friends: PropTypes.array
  }

  static defaultProps = {
    friends: []
  }

  render () {
    const { friends } = this.props

    return (
      <Wrapper>
        <Header>
          <h2>Add a new friend</h2>
          <BackButton color='primary' to='/friends'>
            <Icon name='arrow_back' size='1.3rem' />
            Back
          </BackButton>
        </Header>
        <Card>Here ?</Card>
      </Wrapper>
    )
  }
}

export default FriendsAddScreen
