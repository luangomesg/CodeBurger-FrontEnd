import PropTypes from 'prop-types'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import VerificaToken from '../utils/VerifyToken'

function PrivateRouter({ isAdmin }) {
  const user = localStorage.getItem('codeburger:userData')
  VerificaToken()

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter

PrivateRouter.propTypes = {
  isAdmin: PropTypes.bool
}
