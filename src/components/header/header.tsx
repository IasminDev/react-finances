import { BurgerMenu } from './burger-menu'
import { Logo } from './logo'
import { Notification } from './notification'
import { Login } from './login'

export function Header(){
    return(
        <div className='w-full flex flex-wrap justify-between p-5 items-center border-b border-slate-400 relative'>
            <BurgerMenu/>
            <Logo/>
            <div className='flex items-center justify-end w-64 gap-4'>
                <Notification/>
                <Login/>
            </div>
        </div>
    )
}