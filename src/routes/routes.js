import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRouter from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
