import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/MasterContext'

function ProtectedRoutes() {
  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.email) {
      if (location.pathname === '/') navigate('/home')
    } else {
      navigate('/signin')
    }
  }, [user])

  // return user?.email ? <Outlet /> : <Navigate to={'/signin'} />
}

export default ProtectedRoutes
