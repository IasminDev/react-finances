import { Header } from "../components/header/header";
import { NavLink } from "../components/ui/nav-link"
import financesIcon from '/src/assets/logo.svg'
import headerBg from '/src/assets/header-bg.svg'
import { BarChart4Icon, CoinsIcon, ShuffleIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Header/>
      <div className='flex flex-col flex-wrap items-center justify-center'>
        <header className='h-full flex flex-wrap items-center justify-center'>
          <img className='m-0 relative z-[-1] opacity-20 ' src={headerBg} alt='home-background'></img>
          <div className='mt-20 absolute flex flex-wrap z-[0] justify-center items-center flex-col sm:flex-row sm:gap-10'>
              <img className='w-20 h-20 sm:h-60 sm:w-60' src={financesIcon} alt="Logo" />
              <div>
                <p className='text-lg p-2 text-center items-center sm:text-justify sm:w-96'>
                  Welcome to <strong className='text-slate-900'>Aurea</strong>, the financial management system that transforms how you 
                  handle your personal finances.
                </p>
                <a href="/log-in-account"><Button className="w-50">Make your log in</Button></a>
              </div>
          </div>
        </header>
        <main className='flex flex-col flex-wrap gap-3'>
          
          <p className='text-lg p-4 text-center'>In today's fast-paced world, managing your finances efficiently is essential to achieving your goals and ensuring 
          a healthy financial future. Aurea has been developed with the aim of simplifying this task, offering an intuitive 
          and powerful platform for total control of your personal finances.</p>
      
          <h3 className=''>Key Features</h3>
          
          <section className='flex flex-col sm:flex-row gap-10 justify-center items-center'>
            <div className='text-center items-center flex flex-col gap-3 max-w-96'>
              <ShuffleIcon className='w-40 h-40'/>
              <h4 className=''>Expense Tracking:</h4>

              <p>Keep a detailed record of all your financial transactions. With Aurea, you can easily input and categorize your expenses, 
                providing a clear and organized view of where your money is being spent.</p>
            </div>

            <div className='text-center items-center flex flex-col gap-3 max-w-96'>
              <CoinsIcon className='w-40 h-40'/>
              <h4 className="">Financial Goal Setting:</h4>

              <p>Set personalized financial goals and track your progress. Whether it's saving for a dream trip, buying a new car, or simply 
                building an emergency fund, Aurea helps you define and achieve your goals with ease.</p>
            </div>

            <div className='text-center items-center flex flex-col gap-3 max-w-96'>
              <BarChart4Icon className='w-40 h-40'/>
              <h4 className="">Financial Performance Analysis:</h4>

              <p>With detailed reports and interactive graphs, Aurea offers a comprehensive analysis of your financial performance. Identify 
                spending patterns, discover areas where you can save, and make more informed financial decisions.</p>
            </div>
          </section>

          <h3>Exclusive Plans</h3>
          <p>For users who want to explore the full potential of Aurea, we offer exclusive plans with advanced features:</p>
          
          <h4>Basic Plan:</h4>
          <ul>
            <li><strong>Revenue:</strong> Tracking and management of all your income.</li>
            <li><strong>Debt:</strong> Control and monitoring of your debts to assist in efficient repayment.</li>
            <li><strong>Financial Goals:</strong> Setting and tracking financial goals for effective planning.</li>
          </ul>
          <h4>Medium Plan:</h4>
          <ul>
            <li><strong>Budget:</strong> Tools to create and manage your budget efficiently.</li>
            <li><strong>Income:</strong> Tracking of all your sources of income.</li>
            <li><strong>Disposable Income:</strong> Automatic calculation of available income after essential expenses.</li>
            <li><strong>Variable and Fixed Expenses:</strong> Detailed management of variable and fixed expenses.</li>
          </ul>
          <h4>Expert Plan:</h4>
          <ul>
            <li><strong>Exchange Rate:</strong> Access to real-time exchange rates to facilitate your international transactions.</li>
            <li><strong>Personal Trader:</strong> Support from a personal trader for investment guidance.</li>
            <li><strong>Home Broker:</strong> Integrated brokerage platform for your stock market operations.</li>
          </ul>
          <h3>Why Choose Aurea?</h3>
          <ul>
            <li><strong>Intuitive Interface:</strong> An easy-to-use platform designed to simplify financial management.</li>
            <li><strong>Security:</strong> State-of-the-art data protection to ensure your financial information is always secure.</li>
            <li><strong>Customer Support:</strong> Dedicated team to assist you with any questions or needs.</li>
          </ul>
          <p>Aurea is not just a financial management system; it's your partner on the journey to a safer and more successful 
            financial future. Subscribe to one of our exclusive plans and start transforming your finances today!</p>
        </main>
        <footer>
          <NavLink href='/create-account'>Try Aurea and discover how simple and efficient it is to manage your finances intelligently.</NavLink>
        </footer>
      </div>
    </div>
  )
}