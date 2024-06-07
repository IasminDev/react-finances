import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<'td'>{}

export function TableCell(props: TableCellProps){
    return(
        <td {...props} 
            className={twMerge('p-4 bg-transparent items-center justify-center text-left', props.className)}>
        </td>
    )
}