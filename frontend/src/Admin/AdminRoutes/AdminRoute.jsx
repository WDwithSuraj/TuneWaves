import React from 'react'
import {Routes,Route, Link} from "react-router-dom"
import { AdminDashboard } from '../AdminPages/AdminDashboard'
import { AdminUsers } from '../AdminPages/AdminUsers'
import { AdminManageSong } from '../AdminPages/AdminManageSong'
export const AdminRoute = () => {
  return (
    <div>
        <div>
            <Routes>
                <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                <Route path='/admin/users' element={<AdminUsers/>} />
                <Route path='/admin/managesong' element={<AdminManageSong/>} />
            </Routes>
        </div>
    </div>
  )
}
