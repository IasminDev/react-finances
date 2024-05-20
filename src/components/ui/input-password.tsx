import { EyeIcon } from 'lucide-react'
import { ComponentProps, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentProps<'input'>{}

export function InputPassword ({...props}:InputProps){

    const [inputType, setInputType]= useState('password')

    return(
        <div className='py-3 px-1.5 w-72 border border-slate-400/10 rounded-md flex items-center gap-3'>
            <input 
                {...props} 
                required
                type={inputType}
                maxLength={8}
                className={twMerge(
                    'bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm focus:ring-0'
                    )}/>
                <EyeIcon onClick={()=>{
                        setInputType(inputType === 'password' ? 'text' : 'password')}} 
                        className='text-slate-400'
                />
        </div>
    )
}