import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'>{}

export function Button({...props}:ButtonProps){
    return(
        <div className='flex items-center justify-center'>
            <button
                {...props} 
                 className=
                 {twMerge('py-3 px-1.5 w-24 border border-slate-400/10 rounded-md shadow-2xl roboto-bold text-md text-slate-400 drop-shadow-xl hover:border-slate-400 hover:text-slate-50', props.className)}>
            </button>
        </div>
    )
}