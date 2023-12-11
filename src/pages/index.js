import AuthRoutes from 'components/route/AuthRoutes'
import ProtectedRoutes from 'components/route/ProtectedRoutes'
import { authRoutes, protectedRoutes } from 'configs/routes'
import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import {Register} from './auth/register'
import AppRoute from 'components/route/AppRoute'
import CheckAuth from 'components/route/CheckAuth'

export default function AllPages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoutes />}>
          {
            protectedRoutes.map(route => <Route key={route.key} path={route.path} element={
              <CheckAuth role={route.role}>
                <AppRoute component={route.component} />
              </CheckAuth>
            } />)
          }
        </Route>
        <Route path='/' element={<AuthRoutes />} >
          {
            authRoutes.map(route => <Route key={route.key} path={route.path} element={<AppRoute component={route.component} />} />)
          }
        </Route>
        <Route path='*' element={<p>Not Found</p>} />
        </Routes>
    </div>
  )
}
