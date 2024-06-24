import { Account } from "../popout/account";
import { SquareUserIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { DecodedToken } from "../../types/type";
import { jwtDecode } from "jwt-decode";

export function Login() {
  const user = localStorage.getItem("user") as string | null;
  const decoded: DecodedToken = user
    ? jwtDecode<DecodedToken>(user)
    : { id: null, name: "Login", token: "" };
  const name = decoded?.name;

  const [transparent, setTransparent] = useState<boolean>(true);
  return (
    <div
      onClick={() => setTransparent(!transparent)}
      className="flex items-center justify-end gap-1 cursor-pointer"
    >
      <SquareUserIcon className="w-9" />
      <p className="roboto-regular hidden sm:flex">{name}</p>
      <ChevronDown className="w-4 opacity-80 hover:opacity-100 cursor-pointer" />
      <Account transparent={transparent} />
    </div>
  );
}
