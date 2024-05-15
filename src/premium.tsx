import { Header } from "./components/header/header";
import { Card } from "./components/utils/card";

export function Premium(){
    return(
        <div className='flex flex-col items-center gap-5'>        
            <Header/>
            <div className='flex flex-col items-center py-5 gap-5'>
                <h2 className='text-2xl'>Premium Plan</h2>
                <div className='flex flex-wrap items-center justify-center gap-5 p-5'>
                    <Card
                    id={1}
                    option={'Basic'}
                    srcImg={'../src/assets/logo.png'}
                    resources={{
                        resourceOne:'resource One',
                        resourceTwo:'resource Two',
                        resourceThree:'resource Three',
                        resourceFour:'resource Four'
                    }}
                    />
                    <Card
                    id={2}
                    option={'Medium'}
                    srcImg={'../src/assets/logo.png'}
                    resources={{
                        resourceOne:'resource One',
                        resourceTwo:'resource Two',
                        resourceThree:'resource Three',
                        resourceFour:'resource Four'
                    }}
                    />
                    <Card
                    id={3}
                    option={'Expert'}
                    srcImg={'../src/assets/logo.png'}
                    resources={{
                        resourceOne:'resource One',
                        resourceTwo:'resource Two',
                        resourceThree:'resource Three',
                        resourceFour:'resource Four'
                    }}
                    />
                </div>
            </div>
        </div>
    )
}