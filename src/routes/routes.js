import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRouter from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Register />}></Route>

        <Route path="/" element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/produtos" element={<PrivateRouter />}>
          <Route path="/produtos/:categoryId" element={<Products />} />
        </Route>

        <Route path="/carrinho" element={<PrivateRouter />}>
          <Route path="/carrinho" element={<Cart />} />
        </Route>

        <Route path="/pedidos" element={<PrivateRouter isAdmin />}>
          <Route path="/pedidos" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
