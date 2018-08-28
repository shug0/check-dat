import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  margin: auto;
  max-width: ${props => props.theme.comps.wrapper.w};
  width: 100%;
  padding: 2rem;
`

export default Wrapper
