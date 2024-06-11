import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { IconButton } from "../ui/icon-button"
import { PencilIcon, Trash2Icon } from "lucide-react"


interface EditOrDeleteProps extends ComponentProps<"div">{
    transparent?: boolean
}

export function EditOrDelete ({ transparent }: EditOrDeleteProps) {
    return(
        <div className={twMerge(
            `w-24 h-16 bg-slate-700 rounded-md absolute 
            border border-white/10 z-50 items-center justify-center`,
            transparent ? "hidden" : "flex"
        )}>
            <div className="flex p-2 gap-3 items-center justify-center">
            <IconButton>
                <PencilIcon className="size-4" />
            </IconButton>
            <IconButton>
                <Trash2Icon className="size-4" />
            </IconButton>
            </div>
        </div>
    )

}