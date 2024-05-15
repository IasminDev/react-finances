import { Button } from "../ui/button";
import { useState } from "react";

interface CardProps {
    id: number;
    option: string;
    srcImg: string;
    resources: {
      resourceOne: string;
      resourceTwo: string;
      resourceThree: string;
      resourceFour: string;
    };
  }

export function Card({id, option, srcImg, resources: { resourceOne, resourceTwo, resourceThree, resourceFour }}:CardProps){
    const [plan, setPlan] = useState(3)
    return(
        <div className='flex flex-col w-72 h-96 bg-slate-400/10 border border-white/10 rounded-md items-center gap-3 p-2'>
            <div key={id} className='flex flex-col w-64 border-b border-slate-400 items-center gap-3 p-1'>
                <h2 className='text-lg'>{option}</h2>
                <img src={srcImg} alt="price" className='w-24 h-24'/>
            </div>
            <div className='flex flex-col items-center gap-3 p-1'>
                <p>{resourceOne}</p>
                <p>{resourceTwo}</p>
                <p>{resourceThree}</p>
                <p>{resourceFour}</p>
            </div>
            <div className='flex items-center justify-center h-10'>
                {id === plan 
                    ? <h3 className='drop-shadow-2xl text-slate-50 text-lg font-semibold'>Actual Plan</h3> 
                    : <Button>Get Plan</Button>}
            </div>
        </div>
    )
}