import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface StatusSpanProps extends ComponentProps<'span'>{}

export function StatusSpan(props: StatusSpanProps){
    return(
        <span {...props} 
            className=
            {twMerge('rounded-md px-4 py-px font-semibold', props.className)}>
        </span>
    )
}