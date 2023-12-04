import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import VerificaToken from '../utils/VerifyToken'

function PrivateRouter() {
  const user = localStorage.getItem('codeburger:userData')
  VerificaToken()

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
