import { BurgerMenu } from './burger-menu'
import { Logo } from './logo'
// import { Notification } from './notification'
import { Login } from './login'

export function Header(){
    return(
        <div className='w-full grid grid-cols-3 py-5 justify-around items-center border-b border-slate-700 fixed z-[999] bg-slate-900'>
            <BurgerMenu/>
            <div className='flex items-center justify-center'>
                <Logo/>
            </div>
            <div className='flex items-center justify-end gap-1 px-5'>
                {/* <Notification/> */}
                <Login/>
            </div>
        </div>
    )
}