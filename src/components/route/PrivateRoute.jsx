import React, { useContext } from 'react';
import { ThemContext } from '../providers/ThemProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(ThemContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

     if(user) {
        return children;
     }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;