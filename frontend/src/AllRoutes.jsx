import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Login from "./Components/Login"
import Signup from  "./Components/Signup"
import {Admin} from "./Admin/Admin"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={<Home/>}  />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<Admin/>} />

    </Routes>
  )
}
