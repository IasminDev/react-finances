import financesIcon from '/src/assets/logo.png'

export function Logo(){
    return(
        <div className='flex items-center px-4'>
            <img src={financesIcon} alt='Finances' className='h-10 w-10'/>
            <h1 className='roboto-bold text-2xl'>Finances</h1>
        </div>
    )
}