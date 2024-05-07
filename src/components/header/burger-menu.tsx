import { Menu } from '../popout/menu'
import { AlignJustifyIcon } from 'lucide-react'
import { useState } from 'react'

export function BurgerMenu(){
    const [transparent, setTransparent] = useState(true)
    return(
        <div className='flex'>
            <AlignJustifyIcon onClick={() => setTransparent(!transparent)} className='opacity-80 hover:opacity-100 cursor-pointer'/>
            <Menu transparent={transparent}/>
        </div>
    )
}