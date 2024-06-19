import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    id: number;
    option: string;
    srcImg: string;
    resources: string[];
  }

export function Card({id, option, srcImg, resources}:CardProps){
    
    const user = localStorage.getItem("user")
    const navigate = useNavigate()
    const [plan, setPlan] = useState(0)
    useEffect(() => {
    setPlan(1)
    })
    
    return(
        <div className='flex flex-col w-72 h-[400px] bg-slate-400/10 border border-white/10 rounded-md items-center gap-3 p-2'>
            <div key={id} className='flex flex-col w-64 border-b border-slate-400 items-center gap-1 p-1'>
                <h2 className='text-lg'>{option}</h2>
                <img src={srcImg} alt="price" className='w-28 h-28'/>
            </div>
            <div className='flex flex-col items-center justify-between h-full gap-3 p-1'>
            <div className='flex flex-col items-left justify-center w-48 gap-3 p-1'>
                <h2 className="flex items-center justify-center">Features</h2>
                {resources.map((resource, index) => (
                    <div className='flex items-center justify-left gap-2'><Check className="w-3 h-3"/><p className="text-xs" key={index}>{resource}</p></div>
                ))}
            </div>
            <div className='flex items-center justify-center h-10'>
                {user && id === plan 
                    ? <h3 className='drop-shadow-2xl text-slate-50 text-md font-semibold'>Actual Plan</h3> 
                    : <Button onClick={() => {if(user){navigate("/dashboard")} else{navigate("/create-account")}}}>Get Plan</Button>}
            </div>
            </div>
        </div>
    )
}