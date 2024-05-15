import { Menu } from '../popout/menu'
import { AlignJustifyIcon } from 'lucide-react'
import { useState } from 'react'

export function BurgerMenu(){
    const [transparent, setTransparent] = useState(true)
    return(
        <div onClick={() => setTransparent(!transparent)} className='flex px-5 cursor-pointer'>
            <AlignJustifyIcon className='opacity-80 hover:opacity-100'/>
            <Menu transparent={transparent}/>
        </div>
    )
}