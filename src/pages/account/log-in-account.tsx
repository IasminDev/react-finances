import { useState } from "react";
import { Header } from "../../components/header/header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { InputPassword } from "../../components/ui/input-password";
import { NavLink } from "../../components/ui/nav-link";
import { useNavigate } from "react-router-dom"
import { api } from "../../lib/server";

export function LogInAccount() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const handleClick = (email: string) => {
    api.post("/login", {
      email,
      password
    }).then(function(response) {
      localStorage.setItem("user",response.data.accessToken)
      navigate("/dashboard")
    }).catch(function(error) {
      console.log(error)
      setInfo("Can't sign in to your account");      
    })
  }
  
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="flex flex-wrap flex-col items-center py-5 gap-5 mt-24">
        <h2 className="text-2xl">Log In Account</h2>
        <div className="flex flex-col p-2 items-center">
          <div className="flex flex-col p-2 gap-2">
            <label id="email">Email</label>
            <Input
              type="email"
              id="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col p-2 gap-2">
            <label id="Password">Password</label>
            <InputPassword 
              id="password" 
              placeholder="Password..."
              value={password} 
              onChange={(e) => {
                setPassword(e.target.value);
              }}/>
          </div>
          <p className="text-md text-center text-red-500 drop-shadow-lg">
            {info}
          </p>
          <div className="flex flex-col p-2 gap-2">
              <Button onClick={() => handleClick(email)} disable={!!info}>Log in</Button>
          </div>
        </div>
        <h3 className="flex text-base items-center gap-1">
          {" "}
          Don't have account?{" "}
          <NavLink href="/create-account">Create here.</NavLink>{" "}
        </h3>
      </div>
    </div>
  );
}
