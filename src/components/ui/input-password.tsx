import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.ComponentProps<'input'> {}

export function InputPassword({...props}: InputProps) {

    const [inputType, setInputType] = useState('password');
    const [isText, setIsText] = useState(false);

    return (
            <div className='w-72 border border-slate-400/10 focus:border-slate-400/50 rounded-md flex items-center'>
                <input
                    {...props}
                    required
                    type={inputType}
                    maxLength={8}
                    className={twMerge(
                        'py-3 px-1.5 bg-transparent rounded-md placeholder-slate-400 flex-1 outline-none border-0 text-sm'
                    )}
                />
                <div className="m-1" onClick={() => {
                    setInputType(inputType === 'password' ? 'text' : 'password');
                    setIsText(!isText);
                }}>
                    {isText ? <EyeIcon className='w-4 h-4 text-slate-400' /> : <EyeOffIcon className='w-4 h-4 text-slate-400' />}
                </div>
            </div>
    )
}
