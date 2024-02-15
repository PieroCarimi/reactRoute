import { createContext, useEffect, useState } from "react";
import { utilityGetIsLogged, utilitySetIsLogged } from "./utilities/utilities";

type ContextProvider = {
    children: React.ReactNode,
}

interface TContext{
    isLogged : boolean,
    setIsLogged : (logged : boolean) => void,
    handleLoginClick : () => void,
}

export const AppContext = createContext<TContext>({
    isLogged : false,
    setIsLogged : () => {},
    handleLoginClick : () => {}
});

export const AppProvider = ({ children }: ContextProvider) => {
    const [isLogged, setIsLogged] = useState<boolean>(utilityGetIsLogged());
    
    const handleLoginClick = () => {
        const newIsLogged = !isLogged;
        utilitySetIsLogged(newIsLogged);
        setIsLogged(newIsLogged);
    };

    useEffect(() => {
        const localStorageIsLogged = localStorage.getItem("isLogged");
        if (localStorageIsLogged !== null) {
            setIsLogged(JSON.parse(localStorageIsLogged));
        }
    }, []);
    
    return (
        <AppContext.Provider value={{ isLogged, setIsLogged, handleLoginClick }}>
            {children}
        </AppContext.Provider>
    );
}