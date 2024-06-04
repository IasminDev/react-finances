import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface TableRowProps extends ComponentProps<'tr'>{}

export function TableRow(props: TableRowProps){
    return(
        <tr 
        {...props} 
        className=
        {twMerge('flex flex-col sm:table-row border-b border-white/10 hover:bg-white/5',
        props.className
        )}>
        </tr>
    )
}