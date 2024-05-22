import { Header } from "../components/header/header";

export function Dashboard() {
    return(
        <div className='flex flex-col gap-5'>
        <Header/>
        <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between'>
          <h2 className='roboto-medium text-xl'>Dashboard</h2>
        </div>
      </div>
    )
}