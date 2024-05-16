import { Header } from "../components/header/header";
import { Input } from "../components/ui/input";

export function Home() {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between'>
        <h2 className='roboto-medium text-xl'>Home</h2>
        <div className='flex items-center'>
        <Input
            type='text'
            id='search'
            placeholder='Search...'
        />
        </div>
      </div>
    </div>
  )
}
