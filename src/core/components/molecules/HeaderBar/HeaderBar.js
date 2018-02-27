import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { key } from 'styled-theme'

const HeaderBarRoot = styled.header`
  height: ${key('comps.headerBar.h')};
`

class HeaderBar extends PureComponent {
  static propTypes = {
  }

  render () {
    return (
      <HeaderBarRoot>
        Title
      </HeaderBarRoot>
    )
  }
}

export default HeaderBar
