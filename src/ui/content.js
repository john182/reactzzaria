import styled from 'styled-components'
import { withTheme } from '@material-ui/styles'

const Content = styled.main`
  padding: ${({ theme }) => theme.spacing(3)}px;
  flex-grow:1;
`

export default withTheme(Content)
