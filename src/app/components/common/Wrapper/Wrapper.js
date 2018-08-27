import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  margin: auto;
  height: calc(100% - ${props => props.theme.comps.headerBar.h});
  max-width: ${props => props.theme.comps.wrapper.w};
  padding: 2rem;
`

export default Wrapper
