import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context";
import { useContext } from "react";

export function GuestRoute (){
    const{isLogged}= useContext(AppContext)
    
    if (isLogged) return <Navigate to="/" />;
    return <Outlet />;
}