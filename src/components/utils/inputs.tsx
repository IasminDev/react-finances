import { Input } from "../../components/ui/input";
import { DropDown } from "../ui/drop-down";

export function Inputs(){
    return(
      <div className='flex flex-col flex-wrap justify-center items-center sm:flex-row'>          
          <div className='flex flex-col p-2 gap-2'>
            <label id='description'>Description</label>
            <Input
            type='text'
            id='description'
            placeholder='Description'
            />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Value'>Value</label>
            <Input
            type='number'
            id='value'
            placeholder='Value'
            />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Status'>Status</label>
            <DropDown/>
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Date'>Date</label>
            <Input
            type='date'
            id='date'
            placeholder='Date'
            />
          </div>
      </div>      
    )    
}