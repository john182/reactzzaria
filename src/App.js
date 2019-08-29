import React, { lazy, Suspense, useEffect, useContext, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from './services/firebase'
import Login from './pages/Login'
import { AuthContext } from './context/auth'
import { LOGIN, HOME } from './routes'
const MainPage = lazy(() => import('./pages/Main'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user: !!user && {
          ...user,
          firstName: user.displayName ? user.displayName.split(' ')[0] : user.email
        }
      })
    })
    setDidCheckUserIn(true)
  }, [setUserInfo])

  if (!didCheckUserIn) {
    console.log('ainda não checou se usuário está logado ou não.')
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>

  )
}

export default App
