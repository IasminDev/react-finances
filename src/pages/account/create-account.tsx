import { Header } from "../../components/header/header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { NavLink } from "../../components/ui/nav-link";
import { InputPassword } from "../../components/ui/input-password";
import { useState } from "react";

export function CreateAccount() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);


  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      setIsPasswordValid(false);
    } else {
      setError("");
      setIsPasswordValid(true);
    }
  }
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isPasswordValid) {
      event.preventDefault();
    }
  }

  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-col items-center justify-center py-5 gap-5 mt-20'>
        <h2 className='text-2xl'>Create new Account</h2>
        <h3 className='flex text-base items-center gap-1'> Already Registered? <NavLink href='/log-in-account'>Log in here.</NavLink> </h3>
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
                type='email'
                id='email'
                placeholder='Email...'
                />
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <label id='Password'>Password <span className="text-xs text-slate-400 ">(max 8 characters)</span></label>
                <InputPassword
                value={password}
                onChange={(e)=>{setPassword(e.target.value); validatePasswords();}}
                onBlur={()=>{validatePasswords()}}
                id='password'
                placeholder='Password...'
                />
            </div>
            <div className='flex flex-col p-2 gap-2'>
                <label id='Password'>Confirm Password <span className="text-xs text-slate-400 ">(max 8 characters)</span></label>
                <InputPassword
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value); validatePasswords();}}
                onBlur={()=>{validatePasswords()}}
                id='confirm-password'
                placeholder='Confirm Password...'
                />
            </div>            
            {!isPasswordValid && <p className="text-red-500 text-sm">{error}</p>}
            <div className='flex flex-col w-full items-center p-2 gap-2'>
            <a href="/dashboard" onClick={handleLinkClick}><Button disabled={!isPasswordValid}>Create</Button></a>                    
            </div>
        </div>
      </div>
    </div>
  )
  
}