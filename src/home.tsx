import { Header } from "./components/header/header";
import { Input } from "./components/ui/input";

export function Home() {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex items-center justify-between px-5 gap-5'>
        <h2 className='roboto-medium'>Home</h2>
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
