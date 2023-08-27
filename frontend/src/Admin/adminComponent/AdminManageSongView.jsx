import React from 'react'
import { Admintopbar } from './Admintopbar'
import { Adminsidebar } from './Adminsidebar'
import { AdminManageSong } from '../AdminPages/AdminManageSong'

export const AdminManageSongView = () => {
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
          <AdminManageSong/>
        </div>
      </div>
    </div>
  </>
  )
}
