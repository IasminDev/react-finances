import { Header } from "../../components/header/header";
import { Card } from "../../components/utils/card";
import Data from "../../constants/premium-plan.json"

export function Premium(){
    return(
        <div className='flex flex-col items-center gap-5'>        
            <Header/>
            <div className='flex flex-col h-screen items-center justify-center gap-5'>
                <div className='flex flex-wrap items-center justify-center gap-5 p-5'>
                    {Data.map((item) => {
                        return(
                        <div>
                            <Card
                            id={item.id}
                            option={item.option}
                            srcImg={item.srcImg}
                            resources={item.resources}
                            />
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}