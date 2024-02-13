import { useContext } from "react";
import { AppContext } from "../Context";

export function Button(){
    const { isLogged, handleLoginClick } = useContext(AppContext);

    return <button onClick={handleLoginClick}>{isLogged ? "Logout" : "Login"}</button>;
}