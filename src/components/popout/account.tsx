import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
import { NavLink } from "../ui/nav-link"

interface AccountProps extends ComponentProps<'div'>{
    transparent?:boolean
}
export function Account({transparent} : AccountProps){
    return(
        <div
            className={
                twMerge('w-40 bg-slate-700 rounded-md absolute mr-5 top-16 right-0 border border-white/10', 
                transparent ? 'hidden' : 'flex')}>
            <div className='flex-col p-2 leading-8'>
                <NavLink href='/log-in-account'>Log In</NavLink>
                <p>Not 2</p>
                <p>Not 3</p>
                <NavLink href='/'>Sign Out</NavLink>
            </div>
        </div>
    )
}