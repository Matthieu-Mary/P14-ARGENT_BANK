import { Outlet } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"


function ProtectedRoutes() {
  const userConnected = localStorage.getItem("token") ? localStorage.getItem("token") : sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null;
    
  return userConnected ? <Outlet /> : <ErrorPage message='Please login to access the profile page' />
}

export default ProtectedRoutes