/* eslint-disable react/prop-types */

import { Navigate,  } from 'react-router-dom'
import useAuth from '../pages/hooks/useAuth'




const PrivateRoute = ({ children }) => {
  const {user, loading} = useAuth()

	if(loading){
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/sign-up"></Navigate>
}

export default PrivateRoute