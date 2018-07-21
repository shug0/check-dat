import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'react-router-dom'

const ButtonStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  padding: 0 1rem;
  letter-spacing: .035em;
  outline: none;
  text-transform: uppercase;
  font-weight: 500;
  height: 40px;
  font-size: ${({theme}) => theme.fonts.medium};
  box-shadow: 
    0 4px 6px rgba(50,50,93,.11), 
    0 1px 3px rgba(0,0,0,.08);
  ;
  margin-bottom: 1rem;
  transition: ease all 0.1s;
  &:hover {
    transform: translateY(-1px); 
    box-shadow: 
      0 7px 14px rgba(50,50,93,.1), 
      0 3px 6px rgba(0,0,0,.08);
    ;
  }
  &:active {
    transform: translateY(1px); 
    box-shadow: 
      0 4px 6px rgba(50,50,93,.11), 
      0 1px 3px rgba(0,0,0,.08);
    ; 
  }
  i {
    font-size: 1em;
    margin-right: .7em;
  }
`

const ButtonStyleNeutral = css`
  color: ${({theme}) => theme.colors.secondary};
  background: ${({theme}) => theme.colors.white};
  &:hover {
    color: ${({theme}) => lighten(0.1, theme.colors.secondary)};
  }
`
const ButtonStylePrimary = css`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.primary};
  &:hover {
    background: ${({theme}) => lighten(0.07, theme.colors.primary)};
  }
`

const ButtonStyleSecondary = css`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.secondary};
  &:hover {
    background: ${({theme}) => lighten(0.07, theme.colors.secondary)};
  }
`

const ButtonStyleWarning = css`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.warning};
  &:hover {
    background: ${({theme}) => lighten(0.07, theme.colors.warning)};
  }
`

const getStyle = ({ color }) => {
  switch (color) {
    case 'primary':
      return ButtonStylePrimary

    case 'secondary':
      return ButtonStyleSecondary

    case 'warning':
      return ButtonStyleWarning

    default:
      return ButtonStyleNeutral
  }
}

export const LinkWrapper = styled(Link)`
  ${ButtonStyle} 
  ${getStyle}
`
export const ButtonWrapper = styled.button`
  ${ButtonStyle} 
  ${getStyle}
`

export const VanillaLinkWrapper = styled.a`
  ${ButtonStyle} 
  ${getStyle}
`
