import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRouter() {
  const user = localStorage.getItem('codeburger:userData')

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
