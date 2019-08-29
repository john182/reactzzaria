import React, { createContext, useCallback, useState } from 'react'
import t from 'prop-types'

import firebase from './../services/firebase'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const onLoginGitHub = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const onLogout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou!')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{
      onLoginGitHub,
      onLogout,
      userInfo,
      setUserInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: t.node.isRequired
}

export { AuthProvider, AuthContext }
