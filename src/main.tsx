import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from './home'
import './index.css'
import { CreateAccount } from './create-account'
import { LogInAccount } from './log-in-account'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/create-account",
    element: <CreateAccount />
  },
  {
    path:"/log-in-account",
    element: <LogInAccount />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
