import { Header } from "../components/header/header";
import financesIcon from '/src/assets/logo.svg'
// import headerBackground from '/src/assets/header-bg.svg'

export function Home() {
  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-col flex-wrap items-center px-5 gap-5 justify-center'>
        <header className='h-full flex flex-wrap gap-10 items-center justify-center bg:[({headerBackground})]'>
          <div className='items-center justify-center flex flex-col gap-5'> 
            <img className='w-60 h-60' src={financesIcon} alt="Logo" />
            <h1 className='text-4xl roboto-bold text-center'>Aurea</h1>
          </div>
          <p className='w-96 mx-1 text-lg text-justify'>Welcome to <strong>Aurea</strong>, the financial management system that transforms how you handle your personal finances. 
            In today's fast-paced world, managing your finances efficiently is essential to achieving your goals and ensuring 
            a healthy financial future. Aurea has been developed with the aim of simplifying this task, offering an intuitive 
            and powerful platform for total control of your personal finances.</p>
        </header>
        <main>
          <h3>Key Features</h3>
          <h4>1. Expense Tracking:</h4>
          <p>Keep a detailed record of all your financial transactions. With Aurea, you can easily input and categorize your expenses, 
            providing a clear and organized view of where your money is being spent.</p>
          <h4>2. Financial Goal Setting:</h4>
          <p>Set personalized financial goals and track your progress. Whether it's saving for a dream trip, buying a new car, or simply 
            building an emergency fund, Aurea helps you define and achieve your goals with ease.</p>
          <h4>3. Financial Performance Analysis:</h4>
          <p>With detailed reports and interactive graphs, Aurea offers a comprehensive analysis of your financial performance. Identify 
            spending patterns, discover areas where you can save, and make more informed financial decisions.</p>
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
          <p><strong>Try Aurea and discover how simple and efficient it is to manage your finances intelligently.</strong></p>
        </footer>
      </div>
    </div>
  )
}
