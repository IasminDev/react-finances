import { Notifications } from '../popout/notifications'
import { Bell } from 'lucide-react'
import { useState } from 'react'

export function Notification(){
    const [transparent, setTransparent] = useState(true)
    return(
        <div onClick={() => setTransparent(!transparent)} className='cursor-pointer'>
            <Bell className='w-4 opacity-80 hover:opacity-100'/>
            <Notifications transparent={transparent}/>
        </div>
    )
}