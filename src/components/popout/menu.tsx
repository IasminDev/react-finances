import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'

interface MenuProps extends ComponentProps<'div'>{
    transparent?:boolean
}
export function Menu({transparent} : MenuProps){
    return(
        <div
            className={
                twMerge('w-40 bg-slate-700 rounded-md absolute mr-5 top-16 left-4 border border-white/10 ', 
                transparent ? 'hidden' : 'flex')}>
            <div className='flex-col p-2 leading-8'>
                <p>Not 1</p>
                <p>Not 2</p>
                <p>Not 3</p>
                <p>Not 4</p>
            </div>
        </div>
    )
}