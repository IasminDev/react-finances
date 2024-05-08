import { Account } from '../popout/account'
import { SquareUserIcon, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Login(){
    const [transparent, setTransparent] = useState(true)
    return(
        <div className='flex items-center justify-end gap-1'>
            <SquareUserIcon className='w-9'/>
            <p className='roboto-regular'>Login</p>
            <ChevronDown onClick={() => setTransparent(!transparent)} className='w-4 opacity-80 hover:opacity-100 cursor-pointer'/>
            <Account transparent={transparent}/>
        </div>
    )
}