import { Header } from "../../components/header/header";
import { Input } from "../../components/ui/input";


export function Debt(){
    return(
        <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-20'>
        <h2 className='roboto-medium text-xl'>Debt</h2>
      </div>
      
      <div>
          
          <div className='flex flex-col p-2 gap-2'>
          <label id='description'>Description</label>
          <Input
          type='description'
          id='description'
          placeholder='Description'
          />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
          <label id='Value'>Value</label>
          <Input
          type='value'
          id='value'
          placeholder='Value'
          />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
          <label id='Status'>Status</label>
          <Input
          type=''
          id='status'
          placeholder='Status'
          />
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
      
      
    </div>
    )
    
}