import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
import { NavLink } from "../ui/nav-link"
import { MenuSection } from "../ui/menu-section"

interface AccountProps extends ComponentProps<'div'>{
    transparent?:boolean
}
export function Account({transparent} : AccountProps){
    return(
        <div 
            className={
                twMerge('fixed left-0 top-0 h-full w-full bg-slate-950/70 z-50', 
                transparent ? 'hidden' : 'flex')}>
            <div
                className={
                    twMerge('w-60 bg-slate-700 rounded-md absolute mr-5 top-16 right-0 border border-white/10', 
                    transparent ? 'hidden' : 'flex')}>
            
                <div className='flex flex-col p-2 gap-2 leading-8'>
                    <MenuSection>Your Account</MenuSection>
                    <NavLink href='/log-in-account'>Log In</NavLink>
                    <NavLink href='/account-settings'>Settings</NavLink>
                    <NavLink href='/premium-plan'>Premium</NavLink>
                    <NavLink href='/'>Sign Out</NavLink>
                </div>
            </div>
        </div>
    )
}