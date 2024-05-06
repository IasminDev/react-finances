import financesIcon from '/src/assets/logo.png'
import { AlignJustifyIcon, Bell, SquareUserIcon, ChevronDown } from 'lucide-react'


export function Header(){
    return(
        <div className='w-full flex flex-wrap justify-between p-5 items-center border-b border-slate-400'>
            <div className='flex'>
            <AlignJustifyIcon className='opacity-80 hover:opacity-100 cursor-pointer'/>
            </div>
            <div className='flex items-center px-4'>
                <img src={financesIcon} alt='Finances' className='h-10 w-10'/>
                <h1 className='roboto-bold text-2xl'>Finances</h1>
            </div>
            <div className='flex items-center gap-4'>
                <Bell className='w-4 opacity-80 hover:opacity-100 cursor-pointer'/>
                <div className='flex items-center gap-1'>
                    <SquareUserIcon className='w-9 opacity-80 hover:opacity-100 cursor-pointer'/>
                    <p className='roboto-regular'>Login</p>
                    <ChevronDown className='w-4 opacity-80 hover:opacity-100 cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}