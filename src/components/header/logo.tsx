import { NavLink } from '../ui/nav-link'
import financesIcon from '/src/assets/logo.svg'

export function Logo(){
    return(
        <div className='flex items-center justify-center cursor-pointer'>
            <NavLink href='/'>
            <img src={financesIcon} alt='Finances' className='h-10 w-10'/>
            </NavLink>
        </div>
    )
}