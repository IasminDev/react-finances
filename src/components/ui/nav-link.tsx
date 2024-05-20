import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface NavLinkProps extends ComponentProps<'a'>{}

export function NavLink(props: NavLinkProps) {
    return(
        <a {...props}
            className={twMerge('flex gap-2 items-center text-base text-slate-300 hover:text-slate-200 cursor-pointer', props.className)}>
        </a>
    )    
}