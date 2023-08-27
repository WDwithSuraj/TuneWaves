import React from 'react'
import { Admintopbar } from './Admintopbar'
import { Adminsidebar } from './Adminsidebar'
import { AdminUsers } from '../AdminPages/AdminUsers'

export const AdminUsersView = () => {
  return (<>
    <div>
      <Admintopbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Adminsidebar />
        </div>
        <div>
          <AdminUsers/>
        </div>
      </div>
    </div>
  </>
  )
}
