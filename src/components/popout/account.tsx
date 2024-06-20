import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { NavLink } from "../ui/nav-link";
import { MenuSection } from "../ui/menu-section";
import {
  LayoutDashboardIcon,
  LogInIcon,
  LogOutIcon,
  SettingsIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AccountProps extends ComponentProps<"div"> {
  transparent?: boolean;
}


export function Account({ transparent }: AccountProps) {
  
  const user = localStorage.getItem("user") as string | null;
  const navigate = useNavigate()
  
  return (
    <div
      className={twMerge(
        "fixed left-0 top-0 h-full w-full bg-slate-950/70 z-50",
        transparent ? "hidden" : "flex"
      )}
    >
      <div
        className={twMerge(
          "w-60 bg-slate-700 rounded-md absolute mr-5 top-16 right-0 border border-white/10",
          transparent ? "hidden" : "flex"
        )}
      >
        <div className="flex flex-col p-2 gap-2 leading-8">
          <MenuSection>Your Account</MenuSection>
          <NavLink href="/log-in-account">
            <LogInIcon className="h-4 w-4" />
            Sign In
          </NavLink>
          <NavLink onClick={() => {if(user){navigate("/dashboard")} else{navigate("/log-in-account")}}}>
            <LayoutDashboardIcon className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink onClick={() => {if(user){navigate("/account-settings")}else{navigate("/log-in-account")}}}>
            <SettingsIcon className="h-4 w-4" />
            Settings
          </NavLink>
          <NavLink onClick={() => {localStorage.removeItem("user"); navigate("/")}}>
            <LogOutIcon className="h-4 w-4" />
            Sign Out
          </NavLink>
        </div>
      </div>
    </div>
  );
}
