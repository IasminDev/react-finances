import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'>{}

export function Table(props: TableProps){
    return(
        <div className='flex mx-auto mb-24 items-center border border-slate-400/10 rounded-md w-72 sm:w-[500px] md:w-[600px] lg:w-[900px] sm:justify-center'>
            <table className='text-sm p-2 w-full' {...props}>
            </table>
        </div>
    )
}