import { injectGlobal } from 'styled-components'

export const theme = {
  comps: {
    headerBar: { h: '50px' },
    friendsBar: { w: '80px' },
    friendsAvatar: { s: '50px' },
    signupWrapper: { w: '400px' },
    wrapper: { w: '960px' }
  },

  fonts: {
    medium: '1rem',
    small: '0.8rem'
  },

  colors: {
    background: '#eeeeee',
    font: '#263238',
    fontLight: '#7a8b93',

    white: '#fff',

    disabled: '#cccccc',
    disabledDark: '#838383',

    primary: '#263238',
    primaryLight: '#4f5b62',
    primaryDark: '#000a12',

    secondary: '#651fff',
    secondaryLight: '#a255ff',
    secondaryDark: '#0100ca',

    warning: '#B71C1C'
  }
}

injectGlobal`
  body, html, #root {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.font};
  }
  
  h1, h2, h3 {
    font-weight: 100;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
`

export default theme
