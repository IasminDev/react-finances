import { Header } from "../../components/header/header";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "../financial-planning/savings";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/server";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import dayjs from "dayjs";


export interface User {
  name: string;
  email: string;
  plan: string;
  registrationDate: string;
}

export function AccountSettings() {

  const user = localStorage.getItem("user") as string | null;
  const decoded: DecodedToken = user
    ? jwtDecode<DecodedToken>(user)
    : { id: null, token: "" };
  const userId = decoded?.id;

  const navigate = useNavigate();

  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [plan,setPlan] = useState<string>("");
  const [info,setInfo] = useState<string>("");
  const [infoName,setInfoName] = useState<string>("");
  const [infoEmail,setInfoEmail] = useState<string>("");
  const [registrationDate,setRegistrationDate] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  useEffect(()=>{
    if(user){
      if(userId){
        api
        .get(`/users/${userId}`, {
          headers: { token: `Bearer ${user}` },
        })
        .then(function(response){
          return response.data;
        })
        .then((data)=>{
          setName(data.user.name);
          setEmail(data.user.email);
          setPlan(data.user.plan);
          setRegistrationDate(data.user.registrationDate);
        })
        .catch(function (error) {
          console.log("Error fetching revenues:", error);
        });
      }
    }
    else{
      navigate("/log-in-account");
    }
  },[user, userId, navigate])


  const handleUpdate = () => {

    if (!name) {
      setInfoName("Please select a name");
      return;
    } else {
      setInfoName("");
    }
    if (!email) {
      setInfoEmail("Please select a email");
      return;
    } else {
      setInfoEmail("");
    }

    if(confirm){
      const updateData = {
        name:name,
        email:email,
        plan:plan,
      };
      api
      .put(`/users/${userId}`,updateData, {
        headers: { token: `Bearer ${user}` },
      })
      .then((response) => {
        const updatedUser = response.data.saving;
        setName(name);
        setEmail(email);
        setPlan(plan);
        setRegistrationDate(registrationDate);
        return updatedUser;
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
    }
    else{
      setInfo('Are you sure?');
    }
    }

  const handleDelete = () => {
    if(confirm){
      api
      .delete(`/users/${userId}`,{
        headers: { token: `Bearer ${user}` },
      })
      .then(() => {
        console.log(`User with ID ${userId} deleted successfully`);
        navigate("/log-in-account");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
    }
    else{
      setInfo('Are you sure?');
    }
  }

  const handleConfirm = () => {
    setConfirm(true)
  }

  return (
    <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap flex-col px-5 gap-5 mt-24'>
        <h2 className='roboto-medium text-xl'>Account Settings</h2>
        <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row">
        <div className="flex flex-col p-2 gap-2">
          <label id="name">
            Name{" "}
          </label>
          <Input
            empty={!!infoName}
            type="text"
            id="name"
            placeholder="Name"
            maxLength={50}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col p-2 gap-2">
        <label id="email">
            Email{" "}
          </label>
          <Input
            empty={!!infoEmail}
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="flex flex-col p-2 gap-2">
        <label id="plan">
            Plan{" "}
          </label>
          <Input
            type="text"
            id="plan"
            placeholder="Plan"
            value={plan}
          />
        </div>
         
        <div className="flex flex-col p-2 gap-2">
        <label id="registrationDate">
            Registration Date{" "}
          </label>
          <Input
            type="date"
            id="registrationDate"
            placeholder="Registration Date"
            value={dayjs(registrationDate).format("YYYY-MM-DD")}
          />
        </div>

      </div>
        <p className="text-md text-center text-red-500 drop-shadow-lg">{info}{infoName}{infoEmail}</p>
      <div className="flex flex-col flex-wrap justify-center p-2 gap-4 sm:flex-row items-center">
        <Button
          className="z-0"
          onClick={handleUpdate}
          disable={!!infoName || !!infoEmail}
        >
          Update
        </Button>
        <Button
          className="z-0"
          onClick={handleDelete}
        >
          Delete
        </Button>

        <Button
          className="z-0"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
      </div> 
    </div>
  )
}
