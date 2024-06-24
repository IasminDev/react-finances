import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { SelectProvider } from "./context/drop-down-context";

import "./index.css";
import { Home } from "./pages/home";
import { CreateAccount } from "./pages/account/create-account";
import { LogInAccount } from "./pages/account/log-in-account";
import { AccountSettings } from "./pages/account/account-settings";
import { Premium } from "./pages/account/premium";
import { Savings } from "./pages/financial-planning/savings";
import { FinancialGoals } from "./pages/financial-planning/financial-goals";
import { Debt } from "./pages/expenses/debt";
import { ContactUs } from "./pages/helping-you/contact-us";
import { Dashboard } from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/log-in-account",
    element: <LogInAccount />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
  {
    path: "/savings",
    element: (
      <SelectProvider>
        <Savings />
      </SelectProvider>
    ),
  },
  {
    path: "/financial-goals",
    element: (
      <SelectProvider>
        <FinancialGoals />
      </SelectProvider>
    ),
  },
  {
    path: "/debt",
    element: (
      <SelectProvider>
        <Debt />
      </SelectProvider>
    ),
  },
  {
    path: "/premium-plan",
    element: <Premium />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Analytics />
    <SpeedInsights />
    <RouterProvider router={router} />
  </>
);
