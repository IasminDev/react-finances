import { NavLink } from "../ui/nav-link"
import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
import { MenuSection } from "../ui/menu-section"
import { CoinsIcon, GemIcon, MonitorSmartphoneIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface MenuProps extends ComponentProps<'div'>{
    transparent?:boolean
}
export function Menu({transparent} : MenuProps){
  
    const user = localStorage.getItem("user")
    const navigate = useNavigate()
    
    return(
        <div className={twMerge('fixed left-0 top-0 h-full w-full bg-slate-950/70 z-50', transparent ? 'hidden' : 'flex')}>
            <div
                className={
                    twMerge('w-60 bg-slate-700 rounded-md absolute mr-5 top-16 left-4 border border-white/10 ', 
                    transparent ? 'hidden' : 'flex')}>
                <div className='flex flex-col p-2 gap-2 leading-8'>

                    <MenuSection>Financial Planning</MenuSection>             
                    <NavLink onClick={() => {if(user){navigate("/financial-goals")} else{navigate("/log-in-account")}}}>
                    <CoinsIcon className="h-4 w-4"/> Financial Goals</NavLink>

                    <MenuSection>Savings</MenuSection>
                    <NavLink onClick={() => {if(user){navigate("/savings")} else{navigate("/log-in-account")}}}> 
                    <TrendingUpIcon className="h-4 w-4"/>Revenue</NavLink>  

                    <MenuSection>Expenses</MenuSection>
                    <NavLink onClick={() => {if(user){navigate("/debt")} else{navigate("/log-in-account")}}}>
                    <TrendingDownIcon className="h-4 w-4"/>Debt</NavLink>

                    <MenuSection>Helping You</MenuSection>
                    <NavLink href='/premium-plan'><GemIcon className="h-4 w-4"/>Be Premium</NavLink>
                    <NavLink href='/contact-us'><MonitorSmartphoneIcon className="h-4 w-4"/> Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}