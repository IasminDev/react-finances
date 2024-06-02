import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'>{}

export function TableHeader(props: TableHeaderProps){
    return(
        <th {...props} className='py-3 px-4 text-sm text-center font-semibold sm:text-left'></th>
    )
}