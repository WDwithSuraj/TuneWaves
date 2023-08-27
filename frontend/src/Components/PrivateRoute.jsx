import React from 'react'
import Login from './Login';
import { Navigate, useNavigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
  return token? children : <Navigate to={"/login"}/>

  
}
