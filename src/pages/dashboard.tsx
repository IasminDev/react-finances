import { Header } from "../components/header/header";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-24">
        <h2 className="roboto-medium text-xl">Dashboard</h2>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-80 h-50 bg-slate-700 rounded-md border border-white/10 p-4 flex flex-col items-center justify-between">
            <p className="mb-4 text-center">Available from the medium plan</p>
            <Button
              className="w-44"
              onClick={() => {
                navigate("/premium-plan");
              }}
            >
              Check it out
            </Button>
          </div>
        </div>
        <div className="fixed z-40 inset-0 bg-slate-950/70 cursor-pointer" />
      </div>
    </div>
  );
}
