import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import paths from '../utils/paths'
import PrivateRouter from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        <Route path="/" element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/produtos" element={<PrivateRouter />}>
          <Route path="/produtos/:categoryId" element={<Products />} />
        </Route>

        <Route path="/carrinho" element={<PrivateRouter />}>
          <Route path="/carrinho" element={<Cart />} />
        </Route>

        <Route path={paths.Order} element={<PrivateRouter isAdmin />}>
          <Route path={paths.Order} element={<Admin path={paths.Order} />} />
        </Route>

        <Route path={paths.Products} element={<PrivateRouter isAdmin />}>
          <Route
            path={paths.Products}
            element={<Admin path={paths.Products} />}
          />
        </Route>

        <Route path={paths.NewProduct} element={<PrivateRouter isAdmin />}>
          <Route
            path={paths.NewProduct}
            element={<Admin path={paths.NewProduct} />}
          />
        </Route>

        <Route path={paths.EditProduct} element={<PrivateRouter isAdmin />}>
          <Route
            path={paths.EditProduct}
            element={<Admin path={paths.EditProduct} />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
