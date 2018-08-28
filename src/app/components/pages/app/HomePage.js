import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Wrapper, Card } from 'app/components/common'

const Content = styled(Card)`
  width: 100%;
`

class HomePage extends PureComponent {
  static propTypes = {
    dbUser: PropTypes.object.isRequired
  }

  render () {
    const { dbUser } = this.props

    return (
      <Wrapper>
        <Content>
          <h1>Ici y aura les liens / musiques et autres trucs</h1>
          <p>Welcome {dbUser.pseudo}</p>
        </Content>
      </Wrapper>
    )
  }
}

export default HomePage
