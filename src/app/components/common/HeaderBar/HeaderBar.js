import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import PropTypes from 'prop-types'
import { key } from 'styled-theme'
import { Link } from 'react-router-dom'

import Icon from 'app/components/common/Icon'

const HeaderBarWrapper = styled.header`
  height: ${key('comps.headerBar.h')};
  background-color: ${key('colors.darkGrey')};
  color: white;
  
  & a {
    color: white;
    text-decoration: none;
  }

  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: end;
  
  font-weight: 300;
`

const Title = styled(Link)`
  margin: 0 auto 0 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
`

const LogoutButton = styled(Icon)`
  padding: 10px;
  margin-left: 1rem;
  cursor: pointer;
`

class HeaderBar extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const { user } = this.props

    return (
      <HeaderBarWrapper>
        <Title to="/">Check Dat !</Title>
        <Link to="/profile">{user.displayName}</Link>
        <LogoutButton name='exit_to_app' onClick={() => firebase.auth().signOut()} />
      </HeaderBarWrapper>
    )
  }
}

export default HeaderBar
