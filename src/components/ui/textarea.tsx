import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextAreaProps extends ComponentProps<'textarea'>{}

export function TextArea ({...props}:TextAreaProps){
    return(
        <textarea 
            {...props}
            id="message" 
            className={twMerge(
                "block p-2.5 w-full min-h-24 max-h-24 text-sm bg-transparent rounded-md placeholder-slate-400 outline-none border border-slate-400/10 focus:ring-1 focus:ring-slate-400/50" 
            )}
            >

        </textarea>
    )
}