import { Notifications } from '../popout/notifications'
import { Bell, BellDot } from 'lucide-react'
import { useState } from 'react'

export function Notification(){
    const [transparent, setTransparent] = useState(true)
    return(
        <div>
            <Bell onClick={() => setTransparent(!transparent)} className='w-4 opacity-80 hover:opacity-100 cursor-pointer'/>
            <Notifications transparent={transparent}/>
        </div>
    )
}