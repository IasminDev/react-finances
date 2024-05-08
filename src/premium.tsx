import { Header } from "./components/header/header";
import { Card } from "./components/utility/card";

export function Premium(){
    return(
        <div className='flex flex-col items-center gap-5'>        
            <Header/>
            <div className='flex flex-col items-center py-5 gap-5'>
                <h2 className='text-2xl'>Premium Plan</h2>
                <div className='flex items-center gap-5 py-5'>
                    <Card
                    option={'Free'}
                    srcImg={'../src/assets/logo.png'}
                    resources={{
                        resourceOne:'resource One',
                        resourceTwo:'resource Two',
                        resourceThree:'resource Three',
                        resourceFour:'resource Four'
                    }}
                    />
                    <Card
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