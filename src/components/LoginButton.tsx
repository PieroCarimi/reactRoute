import { useContext } from "react";
import { utilityGetIsLogged, utilitySetIsLogged } from "../utilities";
import { AppContext } from "../Context";

export function Button(){
    const { isLogged,setIsLogged } = useContext(AppContext);
    setIsLogged(utilityGetIsLogged());

    const handleLoginClick = () => {
        const newIsLogged = !isLogged;
        utilitySetIsLogged(newIsLogged);
        setIsLogged(newIsLogged);
    };

    return <button onClick={handleLoginClick}>{isLogged ? "Logout" : "Login"}</button>;
}