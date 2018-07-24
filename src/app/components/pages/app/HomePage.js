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

class HomePage extends PureComponent {
  static propTypes = {
    dbUser: PropTypes.object.isRequired
  }

  render () {
    const { dbUser } = this.props

    console.log({dbUser})

    return (
      <Wrapper>
        <Content>
          <h1>Ici y aura les liens / musiques et autres trucs</h1>
          {dbUser.email}
        </Content>
      </Wrapper>
    )
  }
}

export default HomePage
