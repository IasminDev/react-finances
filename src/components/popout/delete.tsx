import { ComponentProps, Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";

interface DeleteProps extends ComponentProps<"div">{
    openDelete?: boolean;
    goals?: boolean;
    setOpenDeleteProps: Dispatch<SetStateAction<boolean>>;
}


export function Delete({ openDelete, goals, setOpenDeleteProps }: DeleteProps){
    return(
        <div className={twMerge(
            `fixed inset-0 flex items-center justify-center z-50`,
            openDelete ? "flex" : "hidden"
        )}>
            <div className="w-80 h-50 bg-slate-700 rounded-md border border-white/10 p-4 flex flex-col items-center justify-between"> 
                <p className="mb-4 text-center">Are you sure you want to delete this {goals ? "goal" : "transaction"}?</p>
                <div className="flex space-x-2">
                    <Button>Confirm</Button>
                    <Button onClick={() => setOpenDeleteProps(false)}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}