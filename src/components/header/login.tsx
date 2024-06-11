import { Account } from '../popout/account'
import { SquareUserIcon, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Login(){
    const [transparent, setTransparent] = useState<boolean>(true)
    const name= 'Login'
    return(
        <div onClick={() => setTransparent(!transparent)} className='flex items-center justify-end gap-1 cursor-pointer'>
            <SquareUserIcon className='w-9'/>
            <p className='roboto-regular hidden sm:flex'>{name}</p>
            <ChevronDown className='w-4 opacity-80 hover:opacity-100 cursor-pointer'/>
            <Account transparent={transparent}/>
        </div>
)
}