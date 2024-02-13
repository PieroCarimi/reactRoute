import { useContext } from "react";
import { utilitySetIsLogged } from "../utilities";
import { AppContext } from "../Context";

export function Button(){
    const { isLogged,setIsLogged } = useContext(AppContext);

    const handleLoginClick = () => {
        const newIsLogged = !isLogged;
        utilitySetIsLogged(newIsLogged);
        setIsLogged(newIsLogged);
    };

    return <button onClick={handleLoginClick}>{isLogged ? "Logout" : "Login"}</button>;
}