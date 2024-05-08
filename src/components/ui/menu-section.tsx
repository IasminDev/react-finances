import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface MenuSectionProps extends ComponentProps<'h3'>{}

export function MenuSection(props:MenuSectionProps){
    return(
        <h3 {...props}  
        className= {twMerge('text-lg', props.className)}
        >
        </h3>
    )
}