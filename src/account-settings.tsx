import { Header } from "./components/header/header";
import { Input } from "./components/ui/input";

export function AccountSettings() {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex items-center justify-between px-5 gap-5'>
        <h2 className='roboto-medium text-xl'>Account Settings</h2>
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
