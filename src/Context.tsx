import { createContext, useState } from "react";

type ContextProvider = {
    children: React.ReactNode,
}

interface TContext{
    isLogged : boolean,
    setIsLogged : (logged : boolean) => void
}

export const AppContext = createContext<TContext>({
    isLogged : false,
    setIsLogged : () => {}
});

export const AppProvider = ({ children }: ContextProvider) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AppContext.Provider>
    );
}