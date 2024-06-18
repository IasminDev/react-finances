import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header";
import { NavLink } from "../components/ui/nav-link";
import financesIcon from "/src/assets/logo.svg";
import headerBg from "/src/assets/header-bg.svg";
import financialPlanning from "/src/assets/financial-planning.svg";
import { BarChart4Icon, CoinsIcon, ShuffleIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export function Home() {
  const [showBasic, setShowBasic] = useState<boolean>(false);
  const [showMedium, setShowMedium] = useState<boolean>(false);
  const [showExpert, setShowExpert] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/log-in-account");
  };

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-col flex-wrap items-center justify-center w-full">
        <div className="h-full flex items-center justify-center">
          <img
            className="mt-20 w-full h-auto object-cover relative z-[-1] opacity-20"
            src={headerBg}
            alt="home-background"
          />

          <div className="mt-24 absolute h-full flex flex-col z-[0] justify-center items-center sm:flex-row md:m-0">
            <div className="flex items-center justify-center gap-3 sm:flex-col">
              <img
                className="w-10 h-10 sm:w-20 sm:h-20 md:h-60 md:w-60"
                src={financesIcon}
                alt="Logo"
              />
              <Button onClick={handleClick} className="w-50 sm:hidden">
                Make your log in
              </Button>
            </div>

            <div>
              <p className="text-md p-2 text-center items-center sm:text-justify sm:w-96 sm:text-lg">
                Welcome to <strong className="text-slate-900">Aurea</strong>,
                the financial management system that transforms how you handle
                your personal finances.
              </p>
              <Button onClick={handleClick} className="w-50 hidden sm:block">
                Make your log in
              </Button>
            </div>
          </div>
        </div>

        <main className="flex flex-col flex-wrap items-center gap-2">
          <p className="flex text-md p-4 text-center w-60 sm:w-96  md:w-[600px] lg:w-[1000px]">
            In today's fast-paced world, managing your finances efficiently is
            essential to achieving your goals and ensuring a healthy financial
            future. Aurea has been developed with the aim of simplifying this
            task, offering an intuitive and powerful platform for total control
            of your personal finances.
          </p>

          <h3 className="text-lg p-4 text-center underline">Key Features</h3>

          <section className="flex flex-col flex-wrap sm:flex-row gap-4 p-2 justify-center items-center">
            <div className="text-center items-center flex flex-col gap-2 w-80 h-96 border border-slate-400/10 rounded-md">
              <ShuffleIcon className="w-40 h-40" />
              <h4>Expense Tracking</h4>
              <p className="text-justify p-2">
                Keep a detailed record of all your financial transactions. With
                Aurea, you can easily input and categorize your expenses,
                providing a clear and organized view of where your money is
                being spent.
              </p>
            </div>

            <div className="text-center items-center flex flex-col gap-2 w-80 h-96 border border-slate-400/10 rounded-md">
              <CoinsIcon className="w-40 h-40" />
              <h4>Financial Goal Setting</h4>
              <p className="text-justify p-2">
                Set personalized financial goals and track your progress.
                Whether it's saving for a dream trip, buying a new car, or
                simply building an emergency fund, Aurea helps you define and
                achieve your goals with ease.
              </p>
            </div>

            <div className="text-center items-center flex flex-col gap-2 w-80 h-96 border border-slate-400/10 rounded-md">
              <BarChart4Icon className="w-40 h-40" />
              <h4>Financial Performance Analysis</h4>
              <p className="text-justify p-2">
                With detailed reports and interactive graphs, Aurea offers a
                comprehensive analysis of your financial performance. Identify
                spending patterns, discover areas where you can save, and make
                more informed financial decisions.
              </p>
            </div>
          </section>

          <h3 className="text-lg p-4 text-center underline">Exclusive Plans</h3>
          <p className="text-md text-center w-60 sm:w-96  md:w-[600px] lg:w-[1000px]">
            For users who want to explore the full potential of Aurea, we offer
            exclusive plans with advanced features:
          </p>

          <section className="flex flex-col flex-wrap sm:flex-row gap-4 p-2 items-center justify-center lg:items-start">
            <div
              className={`text-center items-center w-80 flex flex-col flex-wrap p-2 gap-3 ${
                showBasic ? "border" : " "
              } border-slate-400/10 rounded-md `}
            >
              <button
                onClick={() => setShowBasic((prev) => !prev)}
                className={`w-full text-slate-400 hover:text-white h-12 ${
                  !showBasic ? "border" : ""
                } border-slate-400/10 rounded-md`}
              >
                <h4>Basic Plan</h4>
              </button>
              {showBasic && (
                <ul>
                  <li>
                    <strong>Revenue:</strong> Tracking and management of all
                    your income.
                  </li>
                  <li>
                    <strong>Debt:</strong> Control and monitoring of your debts
                    to assist in efficient repayment.
                  </li>
                  <li>
                    <strong>Financial Goals:</strong> Setting and tracking
                    financial goals for effective planning.
                  </li>
                </ul>
              )}
            </div>

            <div
              className={`text-center items-center w-80 flex flex-col flex-wrap p-2 gap-3 ${
                showMedium ? "border" : ""
              } border-slate-400/10 rounded-md`}
            >
              <button
                onClick={() => setShowMedium((prev) => !prev)}
                className={`w-full text-slate-400 hover:text-white h-12 ${
                  !showMedium ? "border" : ""
                } border-slate-400/10 rounded-md`}
              >
                <h4>Medium Plan</h4>
              </button>
              {showMedium && (
                <ul>
                  <li>
                    <strong>Budget:</strong> Tools to create and manage your
                    budget efficiently.
                  </li>
                  <li>
                    <strong>Income:</strong> Tracking of all your sources of
                    income.
                  </li>
                  <li>
                    <strong>Disposable Income:</strong> Automatic calculation of
                    available income after essential expenses.
                  </li>
                  <li>
                    <strong>Variable and Fixed Expenses:</strong> Detailed
                    management of variable and fixed expenses.
                  </li>
                </ul>
              )}
            </div>

            <div
              className={`text-center items-center w-80 flex flex-col flex-wrap p-2 gap-3 ${
                showExpert ? "border" : ""
              } border-slate-400/10 rounded-md`}
            >
              <button
                onClick={() => setShowExpert((prev) => !prev)}
                className={`w-full text-slate-400 hover:text-white h-12  ${
                  !showExpert ? "border" : ""
                } border-slate-400/10 rounded-md`}
              >
                <h4>Expert Plan</h4>
              </button>
              {showExpert && (
                <ul>
                  <li>
                    <strong>Exchange Rate:</strong> Access to real-time exchange
                    rates to facilitate your international transactions.
                  </li>
                  <li>
                    <strong>Personal Trader:</strong> Support from a personal
                    trader for investment guidance.
                  </li>
                  <li>
                    <strong>Home Broker:</strong> Integrated brokerage platform
                    for your stock market operations.
                  </li>
                </ul>
              )}
            </div>
          </section>

          <h3 className="text-lg p-4 text-center underline">
            Why Choose Aurea?
          </h3>
          <section className="flex flex-wrap gap-4 p-2 justify-center items-center">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 border border-slate-400/10 md:w-[600px] lg:w-full">
              <div className="flex items-center justify-center">
                <img
                  className="w-64 h-64"
                  src={financialPlanning}
                  alt="Financial Planning"
                />
              </div>
              <div className="flex justify-center md:hidden">
                <hr className="w-60 mt-3 border-white/10" />
              </div>
              <ul className="flex flex-col justify-center w-96 md:w-[600px] gap-8 p-4">
                <li>
                  <strong className="text-sky-700">Intuitive Interface:</strong>{" "}
                  An easy-to-use platform designed to simplify financial
                  management.
                </li>
                <li>
                  <strong className="text-sky-700">Security:</strong>{" "}
                  State-of-the-art data protection to ensure your financial
                  information is always secure.
                </li>
                <li>
                  <strong className="text-sky-700">Customer Support:</strong>{" "}
                  Dedicated team to assist you with any questions or needs.
                </li>
              </ul>
            </div>
          </section>

          <p className="text-md p-4 text-center w-60 sm:w-96  md:w-[600px] lg:w-[1000px]">
            Aurea is not just a financial management system; it's your partner
            on the journey to a safer and more successful financial future.
            Subscribe to one of our exclusive plans and start transforming your
            finances today!
          </p>
        </main>
        <footer className="p-6 border-t border-slate-400/50 text-center">
          <NavLink href="/create-account">
            Try Aurea and discover how simple and efficient it is to manage your
            finances intelligently.
          </NavLink>
        </footer>
      </div>
    </div>
  );
}
