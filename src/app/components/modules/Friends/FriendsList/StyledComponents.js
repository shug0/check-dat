import styled from 'styled-components'
import { Button } from 'app/components/common'

export const Wrapper = styled.section`
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddButton = styled(Button)`
  margin-bottom: 0;
  font-size: ${({theme}) => theme.fonts.small};
`

export const FriendList = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`
