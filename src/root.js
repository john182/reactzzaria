import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider, withTheme } from '@material-ui/styles'

import App from './App'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { createGlobalStyle } from 'styled-components'
import { OrderContext, AuthProvider } from './context'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

function Root () {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <OrderContext>
            <CssBaseline />
            <GlobalStyle />
            <Router>
              <Route component={App} />
            </Router>
          </OrderContext>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>

  )
}

export default withTheme(Root)
