import { useState, ChangeEvent } from 'react'
import { Header } from "../../components/header/header";
import { NavLink } from "../../components/ui/nav-link";
import { Input } from "../../components/ui/input";
import { TextArea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { GithubIcon, LinkedinIcon, AtSignIcon } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Phone {
  number: string;
  name: string;
}

export function ContactUs(){
  const phones: Phone[] = [
    { number: '5541995459952', name: 'Iasmin' },
    { number: '5541998802927', name: 'Lucas Aprigio' }
  ];
  const [phone, setPhone] = useState<string>(phones[0].number);

  const [formData, setFormData] = useState<FormData>({
    name:'',
    email:'',
    message:''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }
  const handleWhatsappMessage = () => {
    const {name, email, message} = formData
    const urlWhats = `https://api.whatsapp.com/send?phone=${phone}&text=
                      Name:%20${name}%0D%0A
                      Email:%20${email}%0D%0A
                      ${message}`;
    window.open(urlWhats, '_blank')
  }

    return(
    <div className='flex flex-col h-screen items-center gap-5'>
      <Header/>
        <section className='flex flex-wrap h-full items-center justify-center mt-24'>
          <div className='flex flex-wrap p-5 gap-8 h-auto'>
            <div className='flex flex-col h-auto w-96 bg-slate-800 rounded-md border border-slate-400/10 p-4 gap-4'>
              <h2 className='roboto-medium text-xl'>Contact Us</h2>
              <div className='flex flex-col py-3 px-6'>
                <div className='flex items-center gap-3'>
                  <GithubIcon/>
                  <div className='flex flex-col p-2 gap-1'>
                      <label id='github'>GitHub</label>
                      <NavLink href='https://github.com/IasminDev'>Iasmin</NavLink>
                      <NavLink href='https://github.com/AprigioLucas'>Lucas Aprigio</NavLink>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <LinkedinIcon/>
                  <div className='flex flex-col p-2 gap-1'>
                      <label id='linkedin'>Linkedin</label>
                      <NavLink href='https://github.com/IasminDev'>Iasmin</NavLink>
                      <NavLink href='https://github.com/AprigioLucas'>Lucas Aprigio</NavLink>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <AtSignIcon/>
                  <div className='flex flex-col p-2 gap-1'>
                      <label id='email'>Email</label>
                      <NavLink href='mailto:iasmin.frontarolli@gmail.com'>Iasmin</NavLink>
                      <NavLink href='mailto:lucasaprigio1213@gmail.com'>Lucas Aprigio</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-96 flex flex-col h-auto justify-left'>
              <div className='flex flex-col p-2 gap-2'>
                    <label id='name'>Name</label>
                    <Input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Name...'
                      value={formData.name}
                      onChange={handleChange}
                    />
                </div>
              <div className='flex flex-col p-2 gap-2'>
                  <label id='userEmail'>Email</label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email...'
                    value={formData.email}
                    onChange={handleChange}
                  />
              </div>
              <div className='flex flex-col p-2 gap-2'>
                  <label id='message'>Message</label>
                  <TextArea
                    id='message'
                    name='message'
                    placeholder='Your message...'
                    value={formData.message}
                    onChange={handleChange}/>
              </div>
              <div className='flex flex-col p-2 gap-2'>
                <label htmlFor='phone'>Send to</label>
                <div className='flex gap-4'>
                  <select
                    id='phone'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='w-64 bg-transparent border border-slate-400/40 py-3 px-1.5 text-sm rounded-md outline-none focus:ring-0 focus:border-slate-400/50 placeholder-slate-400'
                  >
                    {phones.map((phone) => (
                    <option className='bg-slate-900 h-12' key={phone.number} value={phone.number}>
                      {phone.name}
                    </option>
                  ))}
                  </select>
                  <Button
                    onClick={handleWhatsappMessage}
                    disabled={!formData.name || !formData.email || !formData.message}
                  >
                    Send
                  </Button>
                  </div>
              </div>
            </div>
          </div>
        </section>
    </div> 
    )
}