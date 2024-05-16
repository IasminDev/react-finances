import { Header } from "../../components/header/header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { NavLink } from "../../components/ui/nav-link";

export function LogInAccount(){
    return(
        <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap flex-col items-center py-5 gap-5'>
        <h2 className='text-2xl'>Log In Account</h2>
        <div className='flex flex-col p-2 items-center'>
            <div className='flex flex-col p-2 gap-2'>
                <label id='email'>Email</label>
                <Input
                type='email'
                id='email'
                placeholder='Email...'
                className='peer'
                />
                <p className='text-slate-50 text-sm invisible peer-invalid:visible'>Please provide a valid email address.</p>
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
                <Button>Log in</Button>
            </div>
        </div>
        <h3 className='text-base'> Don't have account? <NavLink href='/create-account'>Create here.</NavLink> </h3>
      </div>
    </div>
    )
}