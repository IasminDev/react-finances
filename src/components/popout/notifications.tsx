import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { MenuSection } from "../ui/menu-section";
import { NavLink } from "../ui/nav-link";

interface NotificationsProps extends ComponentProps<"div"> {
  transparent?: boolean;
}
export function Notifications({ transparent }: NotificationsProps) {
  return (
    <div
      className={twMerge(
        "fixed left-0 top-0 h-full w-full bg-slate-950/70 z-50",
        transparent ? "hidden" : "flex"
      )}
    >
      <div
        className={twMerge(
          "w-60 bg-slate-700 rounded-md absolute mr-5 top-16 right-6 sm:right-28 border border-white/10",
          transparent ? "hidden" : "flex"
        )}
      >
        <div className="flex flex-col p-2 gap-2 leading-8">
          <MenuSection>Notifications</MenuSection>
          <NavLink>Not 1</NavLink>
          <NavLink>Not 2</NavLink>
          <NavLink>Not 3</NavLink>
          <NavLink>Not 4</NavLink>
        </div>
      </div>
    </div>
  );
}
