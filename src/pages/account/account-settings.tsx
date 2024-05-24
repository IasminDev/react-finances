import { Header } from "../../components/header/header";

export function AccountSettings() {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-20'>
        <h2 className='roboto-medium text-xl'>Account Settings</h2>

      </div>
    </div>
  )
}
