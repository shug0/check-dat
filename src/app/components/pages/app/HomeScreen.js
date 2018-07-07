import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  height: calc(100% - ${props => props.theme.comps.headerBar.h});
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

    console.log({user})

    return (
      <Wrapper>
        <Content>
          <h1>Ici y aura les liens / musiques et autres trucs</h1>
          {user.email}
        </Content>
      </Wrapper>
    )
  }
}

export default HomeScreen
