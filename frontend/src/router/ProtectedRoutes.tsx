import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { Outlet } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"


function ProtectedRoutes() {
    const userConnected = useSelector((state: RootState) => state.auth.authSuccess)
    
  return userConnected ? <Outlet /> : <ErrorPage message='Please login to access the profile page' />
}

export default ProtectedRoutes