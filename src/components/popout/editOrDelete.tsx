import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge"
import { IconButton } from "../ui/icon-button"
import { PencilIcon, Trash2Icon } from "lucide-react"
import { Delete } from "./delete"

interface EditOrDeleteProps extends ComponentProps<"div">{
    transparent?: boolean
}

export function EditOrDelete ({ transparent }: EditOrDeleteProps) {
    const[openDelete, setOpenDelete] = useState<boolean>(false);
    // const[transp, setTransp] = useState<boolean>(false);
    
    const handleOpenDelete = () => {
        setOpenDelete(true);
      };
    
      const handleCloseDelete = () =>{
        setOpenDelete(false);
      };
    
    return(
       
        <div className={twMerge(
            `w-24 h-16 bg-slate-700 rounded-md 
            border border-white/10 z-50 items-center absolute justify-center`,
            transparent ? "hidden" : "flex"
        )}>
            <div className="flex p-2 gap-3 items-center justify-center">
            <IconButton>
                <PencilIcon className="size-4" />
            </IconButton>
            
            <IconButton>
                <Trash2Icon onClick={handleOpenDelete} className="size-4" />
            </IconButton>

                <Delete openDelete={openDelete}/>

            </div>
            {openDelete && (
                <div
                className='fixed z-40 inset-0 bg-slate-950/70 cursor-pointer'
                onClick={handleCloseDelete}
                />
            )}
        </div>
    )

}