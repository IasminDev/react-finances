
import { ComponentProps, Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { useSelectContext } from "../../context/drop-down-context";
import { DropDown } from "../ui/drop-down";
import { Input } from "../ui/input";

interface EditProps extends ComponentProps<"div">{
    openEdit?: boolean;
    goals?: boolean;
    setOpenEditProps: Dispatch<SetStateAction<boolean>>;
}


export function Edit({ openEdit, goals, setOpenEditProps }: EditProps){
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState<string | number>("");
    const [date, setDate] = useState("");
    const { select, setSelect } = useSelectContext();


  const handleEdit = () => {

    setDescription("");
    setAmount("");
    setDate("");
    setSelect("");
  };
    return(
        <div className={twMerge(
            `fixed inset-0 flex items-center justify-center z-50`,
            openEdit ? "flex" : "hidden"
        )}>
            <div className="w-80 h-50 bg-slate-700 rounded-md border border-white/10 p-4 flex flex-col items-center justify-between"> 
            <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row">
        <div className="flex flex-col p-2 gap-2">
          <label id="description">
            Description{" "}
            <span className="text-xs text-slate-400 ">(max 50 characters)</span>
          </label>
          <Input
            type="text"
            id="description"
            placeholder="Description"
            maxLength={50}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <label id="Value">Value</label>
          <Input
            type="number"
            id="amount"
            placeholder="Amount"
            value={amount.toString()}
            onChange={(e) => {
              const newAmount = parseFloat(e.target.value);
              setAmount(isNaN(newAmount) ? "" : newAmount);
            }}
          />
        </div>
        <div className={twMerge(`flex-col p-2 gap-2`, goals ? "hidden" : "flex")}>
          <label id="Status">Status</label>
          <DropDown value={select}/>
        </div>

        <div className="flex flex-col p-2 gap-2">
          <label id="Date">Date</label>
          <Input
            type="date"
            id="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      
                
                <p className="mb-4 text-center">Are you sure you want to edit this transaction?</p>
                <div className="flex space-x-2">
                    <Button onClick={handleEdit}>Confirm</Button>
                    <Button onClick={() => setOpenEditProps(false)}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}