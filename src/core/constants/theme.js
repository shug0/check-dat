import { injectGlobal } from 'styled-components';

export const theme = {
  comps: {
    headerBar: { h: '50px' },
    friendsBar: { w: '80px' },
    friendsAvatar: { s: '50px' }
  },

  colors: {
    background: '#fafafa',

    fonts: {
      darkGrey: '#263238',
    },

    lightGrey: '#B0BEC5',


    ikb: '#002fa7',

    primary: '#2e2c43',
    lightPrimary: '#4b486e',
    accent: '#e5b01e',
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
    color: ${theme.colors.fonts.darkGrey};
  }
  
  h1, h2, h3 {
    font-weight: 100;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
`


export default theme
