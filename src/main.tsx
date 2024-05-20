import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import './index.css'
import { Home } from './pages/home'
import { CreateAccount } from './pages/account/create-account'
import { LogInAccount } from './pages/account/log-in-account'
import { AccountSettings } from './pages/account/account-settings'         
import { Premium } from './pages/account/premium'
import { Budget } from './pages/financial-planning/budget'
import { Savings } from './pages/financial-planning/savings'
import { FinancialGoals } from './pages/financial-planning/financial-goals'
import { Debt } from './pages/expenses/debt'
import { VariableExpenses } from './pages/expenses/variable-expenses'
import { FixedExpenses } from './pages/expenses/fixed-expenses'
import { Income } from './pages/income/income'
import { DisposableIncome } from './pages/income/disposable-income'
import { ExchangeRate } from './pages/helping-you/exchange-rate'
import { PersonalTrader } from './pages/helping-you/personal-trader'
import { HomeBroker } from './pages/helping-you/home-broker'
import { ContactUs } from './pages/helping-you/contact-us'
import { Dashboard } from './pages/dashboard'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },{
    path:"/dashboard",
    element: <Dashboard />
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
    path:"/budget",
    element: <Budget />
  },
  {
    path:"/savings",
    element: <Savings />
  },
  {
    path:"/financial-goals",
    element: <FinancialGoals />
  },
  {
    path:"/debt",
    element: <Debt />
  },
  {
    path:"/variable-expenses",
    element: <VariableExpenses />
  },
  {
    path:"/fixed-expenses",
    element: <FixedExpenses />
  },
  {
    path:"/income",
    element: <Income />
  },
  {
    path:"/disposable-income",
    element: <DisposableIncome />
  },
  {
    path:"/exchange-rate",
    element: <ExchangeRate />
  },
  {
    path:"/personal-trader",
    element: <PersonalTrader />
  },
  {
    path:"/home-broker",
    element: <HomeBroker />
  },
  {
    path:"/premium-plan",
    element: <Premium />
  },
  {
    path:"/contact-us",
    element: <ContactUs />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
