import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyle from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer autoClose={2000} />
    <AppProvider>
      <Routes />
    </AppProvider>
  </React.StrictMode>
)
