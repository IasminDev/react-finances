import { NavLink } from "../ui/nav-link"
import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
import { MenuSection } from "../ui/menu-section"

interface MenuProps extends ComponentProps<'div'>{
    transparent?:boolean
}
export function Menu({transparent} : MenuProps){
    return(
        <div
            className={
                twMerge('w-60 bg-slate-700 rounded-md absolute mr-5 top-16 left-4 border border-white/10 ', 
                transparent ? 'hidden' : 'flex')}>
            <div className='flex flex-col p-2 gap-2 leading-8'>

                <MenuSection>Financial Planning</MenuSection>
                <NavLink href='/budget'>Budget</NavLink>
                <NavLink href='/savings'>Savings</NavLink>                
                <NavLink href='/financial-goals'>Financial Goals</NavLink>

                <MenuSection>Expenses</MenuSection>
                <NavLink href='/debt'>Debt</NavLink>
                <NavLink href='/variable-expenses'>Variable Expenses</NavLink>
                <NavLink href='/'>Fixed Expenses</NavLink>

                <MenuSection>Income</MenuSection>
                <NavLink href='/'>Income</NavLink>
                <NavLink href='/'>Disposable Income</NavLink>

                <MenuSection>Helping You</MenuSection>
                <NavLink href='/'>Exchange Rate</NavLink>
                <NavLink href='/'>Personal Trader</NavLink>
                <NavLink href='/'>Home Broker</NavLink>
                <NavLink href='/premium-plan'>Be Premium</NavLink>
                <NavLink href='/'>Contact Us</NavLink>
            </div>
        </div>
    )
}