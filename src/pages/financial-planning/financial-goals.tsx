import { Header } from "../../components/header/header";
import { Inputs } from "../../components/utils/inputs";

export function FinancialGoals(){
    return(
        <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-24'>
        <h2 className='roboto-medium text-xl'>Financial Goals</h2>
      </div>
      <Inputs/>
    </div> 
    )
}