import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from './home'
import './index.css'
import { CreateAccount } from './create-account'
import { LogInAccount } from './log-in-account'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Premium } from './premium'
import { AccountSettings } from './account-settings'

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
  },
  {
    path:"/account-settings",
    element: <AccountSettings />
  },
  {
    path:"/premium-plan",
    element: <Premium />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
