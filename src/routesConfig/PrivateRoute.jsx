import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectisLoggedIn } from "../redux/auth/selectors"

export const PrivateRoute = ({ children }) => {
    const isLogIn = useSelector(selectisLoggedIn)
    if (isLogIn) {
        return children
    }
    return <Navigate to='/login'/>
}
