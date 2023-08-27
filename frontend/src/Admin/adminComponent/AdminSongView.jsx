import React from 'react'
import { AdminAddSong } from '../AdminPages/AdminAddSong'
import { Admintopbar } from './Admintopbar'
import { Adminsidebar } from './Adminsidebar'

export const AdminSongView = () => {
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
          <AdminAddSong/>
        </div>
      </div>
    </div>
  </>
  )
}
