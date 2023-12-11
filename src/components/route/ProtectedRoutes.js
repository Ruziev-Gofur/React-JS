import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { isAuthenticated } from 'store'

export default function ProtectedRoutes() {
  
  if (!isAuthenticated) {
    return <Navigate to={"/register"} replace />   // register pegga replace qiladi  
  }

  return <Outlet />
}
