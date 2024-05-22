import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentProps<'input'>{}

export function InputPassword ({...props}:InputProps){

    const [inputType, setInputType]= useState('password')
    const [isText, setIsText] = useState(false)

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
                     <div className='m-1' onClick={()=>{
                        setInputType(inputType === 'password' ? 'text' : 'password')
                        setIsText(!isText)
                    }}>
                        {isText ? <EyeIcon className='w-4 h-4 text-slate-400'/> : <EyeOffIcon className='w-4 h-4 text-slate-400'/>}
                    </div>
        </div>
    )
}