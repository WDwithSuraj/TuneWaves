import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Login from "./Components/Login"
import Signup from  "./Components/Signup"
import {Admin} from "./Admin/Admin"
import { AdminDashboard } from './Admin/AdminPages/AdminDashboard'
import { AdminUsers } from './Admin/AdminPages/AdminUsers'
import { AdminManageSong } from './Admin/AdminPages/AdminManageSong'
import { AdminAddSong } from './Admin/AdminPages/AdminAddSong'
import { AdminDashboardView } from './Admin/adminComponent/AdminDashboardView'
import { AdminUsersView } from './Admin/adminComponent/AdminUsersView'
import { AdminSongView } from './Admin/adminComponent/AdminSongView'
import { AdminManageSongView } from './Admin/adminComponent/AdminManageSongView'

export const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<AdminDashboardView/>} />
        <Route path='/admin/users' element={<AdminUsersView/>} />
        <Route path='/admin/addsong' element={<AdminSongView/>}/>
      <Route path='/admin/managesong' element={<AdminManageSongView/>} /> 
    </Routes>
  )
}
