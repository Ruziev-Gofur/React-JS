import AuthRoutes from 'components/route/AuthRoutes'
import ProtectedRoutes from 'components/route/ProtectedRoutes'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function AllPages() {
  return (
    <div>
      <Routes>
        <Route path='/auth' element={<AuthRoutes />} />
        <Route path='/' element={<ProtectedRoutes />} />
      </Routes>
    </div>
  )
}
