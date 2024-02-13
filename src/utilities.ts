export const utilityGetIsLogged = (): boolean => {
    const isLoggedString = localStorage.getItem("isLogged");
    return isLoggedString ? JSON.parse(isLoggedString) : false;
};

export const utilitySetIsLogged = (isLogged: boolean): void => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
}