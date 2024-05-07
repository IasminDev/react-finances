import { Header } from "./components/header/header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { NavLink } from "./components/ui/nav-link";

export function CreateAccount() {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-col items-center py-5 gap-5'>
        <h2 className='text-2xl'>Create new Account</h2>
        <h3 className='text-base'> Already Registered? <NavLink href='/log-in-account'>Log in here.</NavLink> </h3>
        <div className='flex flex-col p-2 items-center'>
            <div className='flex flex-col p-2 gap-2'>
                <label id='name'>Name</label>
                <Input
                type='text'
                id='name'
                placeholder='Name...'
                />
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <label id='email'>Email</label>
                <Input
                type='text'
                id='email'
                placeholder='Email...'
                />
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <label id='Password'>Password</label>
                <Input
                type='password'
                id='password'
                placeholder='Password...'
                />
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <Button>Create</Button>
            </div>
        </div>
      </div>
    </div>
  )
}