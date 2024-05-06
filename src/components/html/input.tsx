import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentProps<'input'>{}

export function Input ({...props}:InputProps){
    return(
        <div className='py-3 px-1.5 w-72 border border-slate-400/10 rounded-1g flex items-center gap-3'>
            <input 
                {...props} 
                className={twMerge(
                    'roboto-regular bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm focus:ring-0'
                    )}/>
        </div>
    )
}