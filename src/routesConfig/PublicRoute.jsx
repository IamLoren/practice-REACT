import { useSelector } from "react-redux"
import { selectisLoggedIn } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {
    const isLogIn = useSelector(selectisLoggedIn)
    if (isLogIn) {
     return <Navigate to='/'/>
    }
  return children
}
