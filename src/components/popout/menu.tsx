import { NavLink } from "../ui/nav-link"
import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
import { MenuSection } from "../ui/menu-section"

interface MenuProps extends ComponentProps<'div'>{
    transparent?:boolean
}
export function Menu({transparent} : MenuProps){
    return(
        <div className={twMerge('fixed left-0 top-0 h-full w-full bg-slate-950/70 z-50', transparent ? 'hidden' : 'flex')}>
            <div
                className={
                    twMerge('w-60 bg-slate-700 rounded-md absolute mr-5 top-16 left-4 border border-white/10 ', 
                    transparent ? 'hidden' : 'flex')}>
                <div className='flex flex-col p-2 gap-2 leading-8'>

                    <MenuSection>Financial Planning</MenuSection>
                    {/* <NavLink href='/budget'>Budget</NavLink> */}
                    <NavLink href='/financial-goals'>Financial Goals</NavLink>

                    <MenuSection>Savings</MenuSection>
                    <NavLink href='/savings'>Revenue</NavLink>                

                    <MenuSection>Expenses</MenuSection>
                    <NavLink href='/debt'>Debt</NavLink>
                    {/* <NavLink href='/variable-expenses'>Variable Expenses</NavLink>
                    <NavLink href='/fixed-expenses'>Fixed Expenses</NavLink>

                    <MenuSection>Income</MenuSection>
                    <NavLink href='/income'>Income</NavLink>
                    <NavLink href='/disposable-income'>Disposable Income</NavLink> */}

                    <MenuSection>Helping You</MenuSection>
                    {/* <NavLink href='/exchange-rate'>Exchange Rate</NavLink>
                    <NavLink href='/personal-trader'>Personal Trader</NavLink>
                    <NavLink href='/home-broker'>Home Broker</NavLink> */}
                    <NavLink href='/premium-plan'>Be Premium</NavLink>
                    <NavLink href='/contact-us'>Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}