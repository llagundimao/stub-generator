import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { updateMasterState } from '../../store/reducer/masterReducer'

export const MasterContext = React.createContext()

export function useAuth() {
  return useContext(MasterContext)
}

export function AuthProvider({ children }) {
  const dispatch = useDispatch()
  const [authError, setAuthError] = useState(null)
  const { user } = useSelector(state => state.master)
 
  function signin(email, password) {
    setAuthError(null)
    return auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => setAuthError(err.message))
  }

  function signout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscrib = auth.onAuthStateChanged((u) => {
      dispatch(updateMasterState({ user: !u? null : { email: u?.email } }))
    })
    return unsubscrib
  }, [])

  const providerValue = {
    authError,
    signin,
    signout,
    user
  }

  return (
    <MasterContext.Provider value={providerValue}>
      {children}
    </MasterContext.Provider>
  )
}
