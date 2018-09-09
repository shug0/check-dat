import styled from 'styled-components'
import { Button } from 'app/components/common/index'

export const Wrapper = styled.section`
  width: 350px;
  height: 250px;
`
export const Label = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontsWeight.light};
  padding-bottom: 1rem;
`
export const Result = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`
export const ValidateButton = styled(Button)`
  margin-top: 1rem;
  margin-left: auto;
`
export const ValidateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
